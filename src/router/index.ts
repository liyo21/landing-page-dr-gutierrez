import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import BlogPostView from '@/views/BlogPostView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/blog/:slug',
        name: 'blog-detail',
        component: BlogPostView
    }
];

const router = createRouter({
    history: createWebHistory('/landing-page-dr-gutierrez/'),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0 };
    },
});

export default router;