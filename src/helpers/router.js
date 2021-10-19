import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '', props: true, name:'app', component: require('../App.vue').default },
        { path: '/inicio', props: true, component: require('../components/inicio/Home.vue').default },
    ]
});
