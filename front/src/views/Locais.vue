<template>
    <!-- TODO: Listar os locais aqui -->
    <button class="button btn-lg" @click="redirectToForm">Adicionar novo local</button>
</template>

<script>
export default {
    data() {
        return {
            locais: []
        }
    },
    methods: {
        redirectToForm() {
            const idSetor = this.$route.params.idSetor;
            this.$router.push(`/setores/${idSetor}/add`);
        }
    },
    created() {
        //TODO: recuperar os locais do setor
    },
}
</script>

<style>

</style>