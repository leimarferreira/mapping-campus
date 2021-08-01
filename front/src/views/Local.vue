<template>
    <button class="btn-lg button" @click="redirectToForm">Adicionar evento</button>
    <div v-for="event in events" :key="event.id">
        <button class="btn-lg button" @click="redirectToEvent(event.id)">{{ event.name }}</button>
    </div>
</template>

<script>
import api from "@/api/api";

export default {
    data() {
        return {
            events: []
        }
    },
    methods: {
        async retrieveData() {
            this.events = (await api.get("/events")).data;
        },
        redirectToForm() {
            const idSetor = this.$route.params.idSetor;
            const idLocal = this.$route.params.idLocal;
            this.$router.push(`/setores/${idSetor}/local/${idLocal}/add`);
        },
        redirectToEvent(id) {
            const idSetor = this.$route.params.idSetor;
            const idLocal = this.$route.params.idLocal;
            this.$router.push(`/setores/${idSetor}/local/${idLocal}/evento/${id}`);
        }
    },
    created() {
        this.retrieveData();
    }
}
</script>

<style>

</style>
