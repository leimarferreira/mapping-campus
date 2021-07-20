import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index';
import Autenticacao from '@/views/Autenticacao';
import Cadastro from '@/views/Cadastro';
import Login from '@/views/Login';
import Setores from '@/views/Setores';
import Locais from '@/views/Locais';

const routes = [
    { path: '/', component: Index },
    { path: '/autenticacao', component: Autenticacao },
    { path: '/cadastrar', component: Cadastro },
    { path: '/login', component: Login },
    { path: '/setores', component: Setores },
    { path: '/setores/:idSetor', component: Locais }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
