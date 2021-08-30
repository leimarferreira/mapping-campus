<template>
    <div>
        <div class="pageHeader">
            <PageHeader title="Diretoria"/>
        </div>

        <form class="block" @submit.prevent="onsubmit">
            <h3>Diretor </h3>
            <label class="form-label">Nome: </label>
            <input required class="form-control-md" id="name" v-model="directorName" type="text">
            <label class="form-label">Email: </label>
            <input required class="form-control-md" id="email" v-model="directorEmail" type="text">
            <h3>Vice-Diretor </h3>
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
import api from '@/api/api'
import PageHeader from "../components/PageHeader.vue"
import PageFooter from "../components/PageFooter.vue"
export default {
    name: "AddDiretoria",
    components: {
        PageHeader,
        PageFooter,
    },
    data() {
        return {
            directorName: "",
            directorEmail: "",
            viceName: "",
            viceEmail: "",
            opening: "",
            closing: "",
            info: ""
        }
    },
    methods: {
        onsubmit() {
            const schoolBoardInfo = {
                type: "diretoria",
                name: "Diretoria",
                directorName: this.directorName,
                directorEmail: this.directorEmail,
                viceDirectorName: this.viceName,
                viceDirectorEmail: this.viceEmail,
                openingTime: this.opening,
                closingTime: this.closing,
                additionalInfo: this.info,
                placeId: this.$route.params.idLocal
            };

            if (this.$route.params.idEvento) {
                api.put(`/schoolboard/${this.$route.params.idEvento}`, schoolBoardInfo);
            } else {
                api.post("/schoolboard", schoolBoardInfo);
            }
        },
        async retrieveData() {
            if (this.$route.params.idEvento) {
                const schoolBoardInfo = (await api.get(`/schoolboard/${this.$route.params.idEvento}`)).data;
                this.directorName = schoolBoardInfo.directorName;
                this.directorEmail = schoolBoardInfo.directorEmail;
                this.viceName = schoolBoardInfo.viceDirectorName;
                this.viceEmail = schoolBoardInfo.viceDirectorEmail;
                this.opening = schoolBoardInfo.openingTime;
                this.closing = schoolBoardInfo.closingTime;
                this.info = schoolBoardInfo.additionalInfo;
            }
        }
    },
    created() {
        this.retrieveData();
    }
}
</script>

