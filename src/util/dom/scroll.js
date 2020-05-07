const overflowScrollReg = /scroll|auto/i;

function isWindow(val) {
    return val === window;
}

export function getScroller(el, root = window) {
    let node = el;
    while (
        node &&
        node.tagName !== 'HTML' &&
        node.nodeType === 1 &&
        node !== root
    ) {
        const {
            overflowY
        } = window.getComputedStyle(node);

        if (overflowScrollReg.test(overflowY)) {
            if (node.tagName !== 'BODY') {
                return node;
            }
            // see: https://github.com/youzan/vant/issues/3823
            const {
                overflowY
            } = window.getComputedStyle(node.parentNode);

            if (overflowScrollReg.test(overflowY)) {
                return node;
            }
        }
        node = node.parentNode;
    }
    return root;
}

export function getScrollTop(el) {
    return 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
}

export function setScrollTop(el, value) {
    if ('scrollTop' in el) {
        el.scrollTop = value;
    } else {
        el.scrollTo(el.scrollX, value);
    }
}

export function getRootScrollTop() {
    return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
    );
}

export function setRootScrollTop(value) {
    setScrollTop(window, value);
    setScrollTop(document.body, value);
}

// get distance from element top to page top or scroller top
export function getElementTop(el, scroller) {
    if (isWindow(el)) {
        return 0;
    }

    const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
    return el.getBoundingClientRect().top + scrollTop;
}

export function scrollIntoView(el,scroller){
    const scrollerWidth = scroller.clientWidth;
    const elOffsetLeft = el.offsetLeft;
    const elWidth = el.offsetWidth;
    const difference = (scrollerWidth - elWidth) / 2 - elOffsetLeft;
    scroller.scrollLeft = scroller.scrollLeft + difference;
}




