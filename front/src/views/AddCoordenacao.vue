<template>
    <div>
        <div class="pageHeader">
            <PageHeader title="Coordenacao"/>
        </div>

        <form class="block" @submit.prevent="onsubmit">
            <h3>Coordenador </h3>
            <label class="form-label">Nome: </label>
            <input required class="form-control-md" id="name" v-model="coordinatorName" type="text">
            <label class="form-label">Email: </label>
            <input required class="form-control-md" id="email" v-model="coordinatorEmail" type="text">
            <h3>Vice Coordenador</h3>
            <label class="form-label">Nome: </label>
            <input required class="form-control-md" id="vice-name" v-model="viceName" type="text">
            <label class="form-label">Email: </label>
            <input required class="form-control-md" id="vice-email" v-model="viceEmail" type="text">
            <h3>Horarios</h3>
            <label class="form-label">Abertura: </label>
            <input required class="form-control-md" id="time-opening" v-model="opening" type="time">
            <label class="form-label">Fechamento: </label>
            <input required class="form-control-md" id="time-closing" v-model="closing" type="time">
            <h3>Outras Informacoes</h3>
            <label class="form-label">Informacoes adicionais: </label>
            <input class="form-control-md" id="info" v-model="info" type="text">

            <div class="buttons">
                <button class="button">Enviar</button>
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
    name: "AddCoordenacao",
    components: {
        PageHeader,
        PageFooter,
    },
    data() {
        return {
            coordinatorName: "",
            coordinatorEmail: "",
            viceName: "",
            viceEmail: "",
            opening: "",
            closing: "",
            info: ""
        }
    },
    methods: {
        onsubmit() {
            const coordination = {
                type: "coordenacao",
                name: "Informações",
                coordinatorName: this.coordinatorName,
                coordinatorEmail: this.coordinatorEmail,
                viceCoordinatorName: this.viceName,
                viceCoordinatorEmail: this.viceEmail,
                openingTime: this.opening,
                closingTime: this.closing,
                additionalInfo: this.info,
                placeId: this.$route.params.idLocal
            };

            if (this.$route.params.idEvento) {
                api.put(`/coordinations/${this.$route.params.idEvento}`, coordination);
            } else {
                api.post("/coordinations", coordination);
            }
        },
        async retrieveData() {
            const idEvento = this.$route.params.idEvento;

            if (idEvento) {
                const coordination = (await api.get(`/coordinations/${idEvento}`)).data;
                this.coordinatorName = coordination.coordinatorName;
                this.coordinatorEmail = coordination.coordinatorEmail;
                this.viceName = coordination.viceCoordinatorName;
                this.viceEmail = coordination.viceCoordinatorEmail;
                this.opening = coordination.openingTime;
                this.closing = coordination.closingTime;
                this.info = coordination.additionalInfo;
            }
        }
    },
    created() {
        this.retrieveData();
    }
}
</script>

