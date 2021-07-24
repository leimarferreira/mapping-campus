<template>
    <!-- TODO: Listar os locais aqui -->
    <div class="block">
        <div class="topInlineForm">
            <button class="button btn-lg" @click="redirectToForm">Adicionar novo local</button>
        </div>
        <div class="pageFooter">
            <PageFooter/>
        </div>
    </div>
</template>

<script>
import PageFooter from '../components/PageFooter.vue'
export default {
    data() {
        return {
            locais: []
        }
    },
    components: {
        PageFooter
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
