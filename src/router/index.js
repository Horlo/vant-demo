import Vue from 'vue';
import Router from 'vue-router';
import index from "@/page/index/index.vue";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: index,
        },{
            path: '/placeholder',
            name: 'placeholder',
            component: () => import('@/components/placeholder/placeholder.vue'),
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('@/page/list/list.vue'),
        },
        {
            path: '/detail',
            name:'detail',
            component: () => import('@/page/detail/detail.vue'),
        }
    ],
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