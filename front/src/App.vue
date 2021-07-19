<template>
    <router-view/>
</template>

<script>
import Login from "./views/Login.vue"
import Secretaria from "./components/Secretaria.vue"
import Coordenacao from "./components/Coordenacao.vue"
import Tesouraria from "./components/Tesouraria.vue"
import Diretoria from "./components/Diretoria.vue"
import Recepcao from './components/Recepcao.vue'

    export default {
        name: "App",
        components: {
            Login,
            Secretaria,
            Coordenacao,
                Tesouraria,
                Diretoria,
                Recepcao
        }
    }
</script>

<style>
</style>
