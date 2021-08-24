<template>
<div class="block-container">
<form class="block-center"  style="padding: 6%;" @submit.prevent>
    <img class="iconMedium"  src="../assets/user2.svg">
    <label class="form-label">Login:</label>
    <input required class="form-control-md" id="email" v-model="email" type="text">
    <label class="form-label" for="">Senha:</label>
    <input required class="form-control-md" id="password" v-model="password" type="password">
    <div class="buttons">
        <button class="buttonLoginEntrar" @click.prevent="$router.go(-1)">Voltar</button>
        <button class="buttonLoginSair" @click="submitForm">Entrar</button>
    </div>
    <div v-for="warn in warns" :key="warn">
        <p class="text-danger">{{ warn }}</p>
    </div>
</form>
</div>
</template>

<script>
import api from "@/api/api";

export default{
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            hasError: false,
            warns: new Set()
        }
    },
    methods: {
        async submitForm() {
            const credentials = {
                email: this.email,
                password: this.password
            };

            const user = (await api.post("/authentication", credentials)).data;

            if (user) {
                this.$router.push("/setores");
            } else {
                this.warns.add("Erro ao tentar realizar login.");
            }
        }
    },
    watch: {
        warns: {
            handler(val) {
                if (val.size != 0) {
                    this.hasError = true;
                } else {
                    this.hasError = false;
                }
            },
            deep: true
        }
    }
}
</script>
    