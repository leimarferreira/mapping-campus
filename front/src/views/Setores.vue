<template>
    <div class="main" >
        <div class="topInlineForm">
            <config-button v-if="$root.$data.isLoggedIn" class="buttonImagemConfig"/>
            <mapa-button v-if="$root.$data.isLoggedIn" class="buttonMapa"/>
            <logout-button v-if="$root.$data.isLoggedIn" class="buttonLogout"/>
            <h1 class="tituloSetores">Setores</h1>
            <div class="buttonsBlockSetores">
                <button class="buttonSetores" @click="$router.push('/setores/salas-de-aula')">
                <img src="@/assets/salaDeAula.png" class="imagemSetores" width="40" height="30" alt="" >
                <br>
                Sala de Aula
                </button>
                <button class="buttonSetores" @click="$router.push('/setores/coordenacao')">
                <img src="@/assets/coordenacao.png" class="imagemSetores" width="40" height="30" alt="" >
                <br>
                Coordenação
                </button> 
                <button class="buttonSetores" @click="$router.push('/setores/administracao')">
                <img src="@/assets/administracao.png" class="imagemSetores" width="40" height="30" alt="" >
                <br>
                Administração
                </button>
                <button class="buttonSetores" @click="$router.push('/setores/sala-dos-professores')">
                <img src="@/assets/professor.png" class="imagemSetores" width="40" height="30" alt="" >
                <br>
                Sala dos Professores
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
import PageFooter from '../components/PageFooter.vue';
import LogoutButton from '../components/LogoutButton.vue';
import MapaButton from '../components/MapaButton.vue';
import ConfigButton from '../components/ConfigButton.vue';

export default {
    name: "Setores",
    components: {
        PageFooter,
        LogoutButton,
        MapaButton,
        ConfigButton
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>