<template>
    <div class="main" >
        <div class="topInlineForm">
            <div class="buttons">
                <button class="button btn-lg" @click="$router.push('/setores/AddSalasDeAula')">Sala de Aula</button>
                <button class="button btn-lg" @click="$router.push('/setores/AddCoordenacao')">Coordenação</button> 
                <button class="button btn-lg" @click="$router.push('/setores/AddAdministracao')">Administração</button>
                <button class="button btn-lg" @click="$router.push('/setores/AddSalaDosProfessores')">Sala dos Professores</button>
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