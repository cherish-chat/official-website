import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue')
    },
    {
        // 匹配不到
        path: '/:pathMatch(.*)*',
        // redirect: '/404'
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes: routes
})

export default router