<template>
<form id="login-form" class="block" @submit="onSubmit">
    <img class="iconMedium"  src="../res/icons/user2.svg">
    <label class="form-label">Login</label>
    <input required class="form-control-md" id="email" v-model="login" type="text">
    <label class="form-label" for="">Senha</label>
    <input required class="form-control-md" id="password" v-model="password" type="text">
    <div class="buttons">
        <button class="button">Voltar</button>
        <button class="button">Entrar</button>
    </div>
</form>
</template>

<script>

export default{
    name: "Login",
    data() {
        return {
            login: "",
            password: ""
        }
    },
    methods: {
        onSubmit() {
            console.log("login: ",this.login, "senha:", this.password)
        }
    }
}
</script>
    