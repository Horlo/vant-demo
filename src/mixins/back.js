export default {
    methods: {
        getStackInstanceInfoByName(viewName) {
            const stack = this.$pageStack.getStack();
            let instance = null;
            let i = stack.length - 1;
            for (; i >= 0; i--) {
                const stackInstance = stack[i].vnode.componentInstance;
                const name = stackInstance.$options.name;
                if (name === viewName) {
                    instance = stackInstance;
                    break;
                }
            }
            const difference = instance ? stack.length - 1 - i : null;
            return {
                instance,
                difference
            }

        },
        backByName(viewName='', fn= ()=>{}) {
            if(viewName === ''){
                this.$router.back();
            }
            const {
                instance,
                difference
            } = this.getStackInstanceInfoByName(viewName);
            const next = () => {
                if (instance && difference != 0) {
                    this.$router.go(0 - difference)
                }else{
                     this.$router.back();
                }
            }
            fn.call(this, next, instance, difference);

        }
    },
}