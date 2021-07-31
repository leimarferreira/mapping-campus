<template>
    <div>
        <div class="pageHeader">
            <PageHeader title="Recepcao"/>
        </div>

        <form class="block" @submit="onSubmit">
            <h3>Recepcionista</h3>
            <label class="form-label">Nome: </label>
            <input minlength="5" required class="form-control-md" id="name" v-model="name" type="text">
            <label class="form-label">Email: </label>
            <input minlength="5" required class="form-control-md" id="email" v-model="email" type="text">
            <h3>Horarios</h3>
            <label class="form-label">Abertura: </label>
            <input required class="form-control-md" id="time-opening" v-model="opening" type="time">
            <label class="form-label">Fechamento: </label>
            <input required class="form-control-md" id="time-closing" v-model="closing" type="time">
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
    name: "Recepcao",
    components: {
        PageHeader,
        PageFooter,
    },
    data() {
        return {
            name: "",
            email: "",
            opening: "",
            closing: "",
            info: ""
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();

            const idSector = this.$route.params.idSector;
            api.post("/places", {
                tipo: "Recepcao",
                idSetor: idSector,
                data: {
                    name: this.name,
                    email: this.email,
                    opening: this.opening,
                    closing: this.closing,
                    info: this.info
                }
            })
        },
    }
}
</script>

