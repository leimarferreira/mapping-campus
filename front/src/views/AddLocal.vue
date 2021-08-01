<template>
    <div class="block">
        <form @submit="submit">
            <label for="name" class="form-label">Nome</label>
            <input type="text" required minlength="5" name="name" id="name" class="form-control" v-model="name">
            <button class="button">Adicionar</button>
        </form>

        <div class="pageFooter">
            <button class="button" @click="$router.go(-2)">cancelar</button>
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