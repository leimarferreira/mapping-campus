<template>
    <div>
        <div class="pageHeader">
            <PageHeader title="Tesouraria"/>
        </div>

        <form class="block" @submit="onSubmit">
            <h3>Tesoureiro</h3>
            <label class="form-label">Nome: </label>
            <input required class="form-control-md" id="name" v-model="name" type="text">
            <label class="form-label">Email: </label>
            <input required class="form-control-md" id="email" v-model="email" type="text">
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
import PageHeader from "./PageHeader.vue"
import PageFooter from "./PageFooter.vue"
export default {
    name: "Tesouraria",
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
        onSubmit() {
            console.log("Novo Responsavel: ",this.login, "email:", this.email)
        }
    }
}
</script>

