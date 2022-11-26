import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/cherish'
    },
        {
            path: '/cherish',
            component: () => import('../page/index.vue'),
            meta: {
                title: '惺惺App'
            },
        }, {
            path: '/settingsList',
            component: () => import('../page/settingsList.vue'),
            meta: {
                title: '设置'
            },
        }, {
            path: '/privacyPolicy',
            component: () => import('../page/privacyPolicy.vue'),
            meta: {
                title: '惺惺用户隐私政策'
            },
        }, {
            path: '/userServiceAgreement',
            component: () => import('../page/userServiceAgreement.vue'),
            meta: {
                title: '惺惺用户服务协议'
            },
        }, {
            path: '/description',
            component: () => import('../page/description.vue'),
            meta: {
                title: 'SDK技术说明'
            },
        }
    ]
});
