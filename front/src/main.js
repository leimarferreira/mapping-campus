import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';
import api from './api/api';

const vm = createApp(App).use(router).mount('#app');

router.beforeEach(async (to, from, next) => {
    try {
        await api.get("/authentication/isloggedin");
        vm.$data.isLoggedIn = true;
    } catch {
        vm.$data.isLoggedIn = false;
    }
    
    next();
});
