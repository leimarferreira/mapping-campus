<template>
<div>
    <div class="backButton">
        <PageFooter/>
    </div>
    <div class="blockPesquisar">
        <br><label for="nome" class="pesquisarNome">Nome: </label>
        <input type="text" name="nome" id="nome" v-model="name">
        <label for="quantidade" class="pesquisarQuantidade">Quantidade: </label>
        <input type="text" name="quantidade" id="pesquisarQuantidade" v-model="limit">
        <button @click="filter" class="buttonPesquisar"> <img src="@/assets/lupa.png" width="20" height="20" alt="" ></button>
    </div>
    <div v-for="place in places" class="blockLocais" :key="place.id">
        <button class="buttonLocais" @click="redirectToPlace(place.id)">{{ place.name }}</button>
    </div>
</div>
</template>

<script>
import api from "@/api/api";
import PageFooter from '../components/PageFooter.vue';

export default {
    data() {
        return {
            places: []
        }
    },
    components: {
        PageFooter
    },
    methods: {
        redirectToForm() {
            const idSetor = this.$route.params.idSetor;
            this.$router.push(`/setores/${idSetor}/add`);
        },
        redirectToPlace(id) {
            const idSetor = this.$route.params.idSetor;
            this.$router.push(`/setores/${idSetor}/visuLocal/${id}`);
        },
        async retrieveData() {
            try {
                this.places = (await api.get("/places", {
                    params: {
                        sectorId: this.$route.params.idSetor
                    }
                })).data;
            } catch (error) {
            }
        },
        async filter() {
            try {
                this.places = (await api.get(`/places/${this.name}`, {
                    params: {
                        sectorId: this.$route.params.idSetor,
                        limit: this.limit
                    }
                })).data;
            } catch {
            }
        }
    },
    created() {
        this.retrieveData();
    },
}
</script>
