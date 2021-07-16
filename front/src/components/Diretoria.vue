<template>
    <div>
        <div class="pageHeader">
            <h1>Diretoria</h1>
        </div>

        <form class="block" @submit="onSubmit">
            <h3>Diretor </h3>
            <label class="form-label">Nome: </label>
            <input required class="form-control-md" id="name" v-model="name" type="text">
            <label class="form-label">Email: </label>
            <input required class="form-control-md" id="email" v-model="email" type="text">
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
                <button class="button">Adicionar</button>
            </div>
        </form>

        <div class="pageFooter">
            <img class="iconMedium"  src="../res/icons/arrow_left.svg" @click="goBack">
            <h3>Voltar</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Diretoria",
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
        onSubmit() {
            console.log("Novo Responsavel: ",this.login, "email:", this.email)
        },
        goBack()
        {
            console.log("returning")
        }
    }
}
</script>

