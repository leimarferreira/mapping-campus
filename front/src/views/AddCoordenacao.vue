<template>
    <div>
        <div class="pageHeader">
            <PageHeader title="Coordenacao"/>
        </div>

        <form class="block" @submit.prevent="onsubmit">
            <h3>Coordenador </h3>
            <label class="form-label">Nome: </label>
            <input minlength="5" required class="form-control-md" id="name" v-model="name" type="text">
            <label class="form-label">Email: </label>
            <input minlength="5" required class="form-control-md" id="email" v-model="email" type="text">
            <h3>Vice Coordenador</h3>
            <label class="form-label">Nome: </label>
            <input required minlength="5" class="form-control-md" id="vice-name" v-model="viceName" type="text">
            <label class="form-label">Email: </label>
            <input required minlength="5" class="form-control-md" id="vice-email" v-model="viceEmail" type="text">
            <h3>Horarios</h3>
            <label class="form-label">Abertura: </label>
            <input required minlength="5" class="form-control-md" id="time-opening" v-model="opening" type="time">
            <label class="form-label">Fechamento: </label>
            <input required minlength="5" class="form-control-md" id="time-closing" v-model="closing" type="time">
            <h3>Outras Informacoes</h3>
            <label class="form-label">Informacoes adicionais: </label>
            <input class="form-control-md" id="info" v-model="info" type="text">

            <div class="buttons">
                <button class="button">Adicionar</button>
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
            name: "",
            email: "",
            viceName: "",
            viceEmail: "",
            opening: "",
            closing: "",
            info: ""
        }
    },
    methods: {
        onsubmit() {
            
            const idSetor = this.$route.params.idSetor;
                api.post("/events", {
                    
                    type: "coordenacao",
                    
                        name: this.name,
                        email: this.email,
                        viceName: this.viceName,
                        viceEmail: this.viceEmail,
                        opening: this.opening,
                        closing: this.closing,
                        info: this.info
                    
                });   
        },
    }
}
</script>

