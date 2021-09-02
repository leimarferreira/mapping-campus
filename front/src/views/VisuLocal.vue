<template>
    <div class="main">
        <div class="backButton">
            <PageFooter/>
        </div>
        <div v-for="event in events" class="blockLocal" :key="event.id">
            <button class="buttonLocal" @click="redirectToEvent(event.id)">{{ event.name }}</button>
        </div>
    </div>
</template>

<script>
import api from "@/api/api";
import PageFooter from '../components/PageFooter.vue';

export default {
    data() {
        return {
            events: []
        }
    },
    components: {
        PageFooter
    },
    methods: {
        async retrieveData() {
            const idLocal = this.$route.params.idLocal;
            this.events = (await api.get(`/events/place/${idLocal}`)).data;
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
