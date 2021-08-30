<template>
    <div>
        <div class="pageHeader">
            <PageHeader title="Recepcao"/>
        </div>

        <form class="block">
            <h3>Recepcionista</h3>
            <label class="form-label">Nome: </label>
            <input required class="form-control-md" id="name" v-model="responsibleName" type="text">
            <label class="form-label">Email: </label>
            <input required class="form-control-md" id="email" v-model="responsibleEmail" type="text">
            <h3>Horarios</h3>
            <label class="form-label">Abertura: </label>
            <input required class="form-control-md" id="time-opening" v-model="opening" type="time">
            <label class="form-label">Fechamento: </label>
            <input required class="form-control-md" id="time-closing" v-model="closing" type="time">
            <h3>Outras Informacoes</h3>
            <label class="form-label">Informacoes adicionais: </label>
            <input class="form-control-md" id="info" v-model="info" type="text">
            <div class="buttons">
                <button class="button" @click.prevent="submitForm">Adicionar</button>
            </div>
        </form>

        <div class="pageFooter">
            <PageFooter/>
        </div>
    </div>
</template>

<script>
import api from '@/api/api';
import PageHeader from "../components/PageHeader.vue"
import PageFooter from "../components/PageFooter.vue"
export default {
    name: "AddRecepcao",
    components: {
        PageHeader,
        PageFooter,
    },
    data() {
        return {
            responsibleName: "",
            responsibleEmail: "",
            opening: "",
            closing: "",
            info: ""
        }
    },
    methods: {
        submitForm() {
            api.post("/frontdesk", {
                type: "recepcao",
                name: "Recepção",
                responsibleName: this.responsibleName,
                responsibleEmail: this.responsibleName,
                openingTime: this.opening,
                closingTime: this.closing,
                additionalInfo: this.info,
                placeId: this.$route.params.idLocal
            });
        },
        async retrieveData() {
            if (this.$route.params.idEvento) {
                const frontDeskInfo = (await api.get(`/frontdesk/${this.$route.params.idEvento}`)).data;
                this.responsibleName = frontDeskInfo.responsibleName;
                this.responsibleEmail = frontDeskInfo.responsibleEmail;
                this.opening = frontDeskInfo.openingTime;
                this.closing = frontDeskInfo.closingTime;
                this.info = frontDeskInfo.additionalInfo;
            }
        }
    },
    created() {
        this.retrieveData();
    }
}
</script>

