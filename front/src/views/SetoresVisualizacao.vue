<template>
    <div class="main" >
        <div class="topInlineForm">
            <PageFooter/>
            <h1 class="tituloSetores">Setores</h1>
            <div class="buttonsBlockSetores">
                <button class="buttonSetores" @click="$router.push('/setoresVisualizacao/salas-de-aula')">
                <img src="@/assets/salaDeAula.png" class="imagemSetores" width="40" height="30" alt="" >
                <br>
                Sala de Aula
                </button>
                <button class="buttonSetores" @click="$router.push('/setoresVisualizacao/coordenacao')">
                <img src="@/assets/coordenacao.png" class="imagemSetores" width="40" height="30" alt="" >
                <br>
                Coordenação
                </button> 
                <button class="buttonSetores" @click="$router.push('/setoresVisualizacao/administracao')">
                <img src="@/assets/administracao.png" class="imagemSetores" width="40" height="30" alt="" >
                <br>
                Administração
                </button>
                <button class="buttonSetores" @click="$router.push('/setoresVisualizacao/sala-dos-professores')">
                <img src="@/assets/professor.png" class="imagemSetores" width="40" height="30" alt="" >
                <br>
                Sala dos Professores
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
import PageFooter from '../components/PageFooter.vue'
export default {
    name: "Setores",
    components: {
        PageFooter
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