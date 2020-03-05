import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/placeholder',
        name: 'placeholder',
        component: () => import('@/components/placeholder/placeholder.vue'),
    }],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

// router.onReady(() => {
   
// })

// router.beforeEach((to, from, next) => {
    
// })

// router.afterEach(() => {
    
// })

export default router;