<template>
    <div>
        <div class="pageHeader">
            <PageHeader title="Tesouraria"/>
        </div>

        <form class="block">
            <h3>Tesoureiro</h3>
            <label class="form-label">Nome: </label>
            <input required minlength="5" class="form-control-md" id="name" v-model="responsibleName" type="text">
            <label class="form-label">Email: </label>
            <input required minlength="5" class="form-control-md" id="email" v-model="responsibleEmail" type="text">
            <h3>Horarios</h3>
            <label class="form-label">Abertura: </label>
            <input required class="form-control-md" id="time-opening" v-model="opening" type="time">
            <label class="form-label">Fechamento: </label>
            <input required class="form-control-md" id="time-closing" v-model="closing" type="time">
            <h3>Outras Informacoes</h3>
            <label class="form-label">Informacoes adicionais: </label>
            <input class="form-control-md" id="info" v-model="info" type="text">
            <div class="buttons">
                <button class="button" @click.prevent="submit" v-if="$root.$data.isLoggedIn">Enviar</button>
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
    name: "AddTesouraria",
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
        onsubmit() {
            const treasuryInfo = {
                type: "tesouraria",
                name: "Informações",
                responsibleName: this.responsibleName,
                responsibleEmail: this.responsibleEmail,
                openingTime: this.opening,
                closingTime: this.closing,
                additionalInfo: this.info,
                placeId: this.$route.params.idLocal
            };

            if (this.$route.params.idEvento) {
                api.put(`/treasury/${this.$route.params.idEvento}`, treasuryInfo)
            } else {
                api.post("/treasury", treasuryInfo);
            }
        },
        async retrieveData() {
            if (this.$route.params.idEvento) {
                const secretariatInfo = (await api.get(`/treasury/${this.$route.params.idEvento}`)).data;
                this.responsibleName = secretariatInfo.responsibleName;
                this.responsibleEmail = secretariatInfo.responsibleEmail;
                this.opening = secretariatInfo.openingTime;
                this.closing = secretariatInfo.closingTime;
                this.info = secretariatInfo.additionalInfo;
            }
        }
    },
    created() {
        this.retrieveData();
    }
}
</script>

