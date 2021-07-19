<template>
<form id="login-form" class="block" @submit.prevent>
    <img class="iconMedium"  src="../assets/user2.svg">
    <label class="form-label">Login</label>
    <input required class="form-control-md" id="email" v-model="login" type="text">
    <label class="form-label" for="">Senha</label>
    <input required class="form-control-md" id="password" v-model="password" type="text">
    <div class="buttons">
        <button class="button" @click.prevent="$router.go(-1)">Voltar</button>
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
            password: "",
            hasError: false,
            warns: new Set()
        }
    },
    watch: {

    }
}
</script>
    