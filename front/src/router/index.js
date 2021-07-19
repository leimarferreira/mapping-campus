import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index';
import Setores from '@/views/Setores';
import Autenticacao from '@/views/Autenticacao';
import Cadastro from '@/views/Cadastro';
import Login from '@/views/Login';

const routes = [
    { path: '/', component: Index },
    { path: '/setores', component: Setores },
    { path: '/autenticacao', component: Autenticacao },
    { path: '/cadastrar', component: Cadastro },
    { path: '/login', component: Login }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
