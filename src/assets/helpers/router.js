import { createRouter, createWebHistory}  from 'vue-router';
import WelcomeView from '../../Welcome-view.vue';
import HomeView from '../../Home-view.vue';

const routes = [
    { path: '/', component: WelcomeView},
    { path: '/home', component: HomeView},
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router;
