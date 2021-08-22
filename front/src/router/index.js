import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index';
import Autenticacao from '@/views/Autenticacao';
import Cadastro from '@/views/Cadastro';
import Login from '@/views/Login';
import Setores from '@/views/Setores';
import Locais from '@/views/Locais';
import Local from '@/views/Local';
import AddLocal from '@/views/AddLocal';
import AddEvento from '@/views/AddEvento';

const routes = [
    { path: '/', component: Index },
    { path: '/autenticacao', component: Autenticacao },
    { path: '/cadastrar', component: Cadastro },
    { path: '/login', component: Login },
    { path: '/setores', component: Setores },
    { path: '/setores/:idSetor', component: Locais },
    { path: '/setores/:idSetor/add', component: AddLocal },
    { path: '/setores/:idSetor/local/:idLocal', component: Local },
    { path: '/setores/:idSetor/local/:idLocal/add', component: AddEvento },
    { path: '/setores/:idSetor/local/:idLocal/evento/:idEvento', component: AddEvento }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
