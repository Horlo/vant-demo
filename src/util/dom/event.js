export const on = (el, eventName, fn) => {
    el.addEventListener(eventName, fn)
}

export const off = (el, eventName, fn) => {
    el.removeEventListener(eventName, fn)
}

export function stopPropagation(event) {
    event.stopPropagation();
}

export function preventDefault(event, isStopPropagation) {
    /* istanbul ignore else */
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
    }

    if (isStopPropagation) {
        stopPropagation(event);
    }
}