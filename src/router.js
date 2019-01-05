import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import( /* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
        },
        {
            path: '/dashboard/:filter',
            name: 'dashboard',
            component: () => import( /* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
        },
        {
            path: '/movie/:id',
            name: 'movie-details',
            component: () => import( /* webpackChunkName: "dashboard" */ './views/MovieDetails.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import( /* webpackChunkName: "cart" */ './views/Cart.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
});

router.afterEach((to, from) => {
    document.body.className = to.name;
});

export default router;