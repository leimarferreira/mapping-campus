<template>
<div>
    <div class="backButton">
        <PageFooter/>
    </div>
   
    <button class="buttonAdicionaLocal" @click="redirectToForm">Adicionar novo local</button>

    <div v-for="place in places" :key="place.id">
        <button class="buttonAdicionaLocaln" @click="redirectToPlace(place.id)">{{ place.name }}</button>
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
            this.$router.push(`/setores/${idSetor}/local/${id}`);
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
        }
    },
    created() {
        this.retrieveData();
    },
}
</script>
