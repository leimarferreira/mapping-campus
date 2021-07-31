<template>
    <div class="block">
        <label for="name" class="form-label">Nome</label>
        <input type="text" name="name" id="name" class="form-control" v-model="name">
        <button class="button" @click="submit">Adicionar</button>

        <div class="pageFooter">
            <PageFooter/>
        </div>
    </div>
</template>

<script>
import api from "@/api/api";
import PageFooter from "../components/PageFooter.vue"

export default {
    data() {
        return {
            name: ""
        }
    },
    components: {
        PageFooter
    },
    methods: {
        async submit() {
            const idSetor = this.$route.params.idSetor;

            const place = {
                name: this.name,
                sectorId: idSetor
            };

            try {
                await api.post("/places", place);
            } catch (error) {
                console.log(error);
                // TODO: tratar esse erro
            }

            this.$router.push(`/setores/${this.$route.params.idSetor}`);
        }
    }
}
</script>

<style>

</style>