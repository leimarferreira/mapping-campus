import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';
import api from './api/api';

const vm = createApp(App).use(router).mount('#app');

router.beforeEach(async (to, from, next) => {
    try {
        const response = await api.get("/authentication/isloggedin");
        vm.$data.isLoggedIn = true;
        vm.$data.currentUserId = response.data;
    } catch {
        vm.$data.isLoggedIn = false;
        vm.$data.currentUserId = -1;
    }
    
    next();
});
