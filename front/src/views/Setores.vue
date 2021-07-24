<template>
    <div class="main" >
        <div class="topInlineForm">
            <div class="buttons">
                <button class="button btn-lg" @click="$router.push('/setores/SalasDeAula')">Sala de Aula</button>
                <button class="button btn-lg" @click="$router.push('/setores/Coordenacao')">Coordenação</button> 
                <button class="button btn-lg" @click="$router.push('/setores/administracao')">Administração</button>
                <button class="button btn-lg" @click="$router.push('/setores/sala-dos-professores')">Sala dos Professores</button>
            </div>
        </div>
        <div class="pageFooter">
            <PageFooter/>
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