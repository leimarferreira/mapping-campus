<template>
    <div class="main">
        <div class="topInlineForm">
            <div class="buttons">
                <button class="button btn-lg" @click="$router.push('/setores/salas-de-aula')">Sala de Aula</button>
                <button class="button btn-lg" @click="$router.push('/setores/coordenacoes')">Coordenação</button> 
                <button class="button btn-lg" @click="$router.push('/setores/administracao')">Administração</button>
                <button class="button btn-lg" @click="$router.push('/setores/sala-dos-professores')">Sala dos Professores</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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