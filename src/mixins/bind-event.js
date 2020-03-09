import {
    on,
    off
} from '@/util/dom/event.js';
export default function BindEventMixin(handler) {
    function bind() {
        if (!this.binded) {
            handler.call(this, on, true);
            this.binded = true;
        }
    }

    function unbind() {
        if (this.binded) {
            handler.call(this, off, false);
            this.binded = false;
        }
    }

    return {
        data() {
            return {
                binded: false
            }
        },
        mounted: bind,
        activated: bind,
        deactivated: unbind,
        beforeDestroy: unbind,
    };
}