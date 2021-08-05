<template>
    <form id="form" class="block" method="post" @submit.prevent>
            <img class="iconMedium" src="resources\icons\user2.svg" alt="">
            <label class="form-label" for="name">Nome:</label>
            <input required class="form-control-md" type="text" name="name" id="name" v-model="name">
            <label class="form-label" for="email">Email:</label>
            <input required class="form-control-md" type="email" name="email" id="email" v-model="email">
            <label class="form-label" for="number">Número do servidor:</label>
            <input required class="form-control-md" type="number" name="number" id="number" v-model="number">
            <label class="form-label" for="password">Senha:</label>
            <input required class="form-control-md" type="password" name="password" id="password" v-model="password">
            <label class="form-label" for="password-confirm">Confirmar senha:</label>
            <input required class="form-control-md" type="password" name="password-confirm" id="password-confirm" v-model="passwordConfirm">
            <div class="buttons">
                <button class="button" type="button" @click.prevent="$router.go(-1)">Voltar</button>
                <button id="submit" class="button" type="submit" :disabled="hasError" @click="submitForm">Cadastrar</button>
            </div>
            <div v-for="warn in warns" :key="warn">
                <p class="text-danger">{{ warn }}</p>
            </div>
        </form>
</template>

<script>
import api from "@/api/api";

export default {
    data() {
        return {
            name: "",
            email: "",
            number: "",
            password: "",
            passwordConfirm: "",
            hasError: false,
            warns: new Set()
        }
    },
    methods: {
        async submitForm() {
            const user = {
                name: this.name,
                number: this.number,
                email: this.email,
                password: this.password
            };

            try {
                await api.post("/users", user);
                this.$router.push("/login");
            } catch (error) {
                this.warns.push("Ocorreu um erro ao fazer o cadastro.");
                this.hasError = true;
            }
        }
    },
    watch: {
        email(val) {
            const regexp = new RegExp("(^[a-zA-Z0-9]+([.]{1}[a-zA-Z0-9]+)*)[@]{1}([a-zA-Z0-9]+[.])*[a-zA-Z]+");

            if (!regexp.test(val)) {
                this.warns.add("Email inválido.");
            } else {
                if (this.warns.has("Email inválido.")) {
                    this.warns.delete("Email inválido.");
                }
            }
        },
        password(val) {
            const regexp = new RegExp("^.*(?=.*[a-zA-Z])(?=.*\\d).*$");

            if (val.length < 8 || val.length > 16 || !regexp.test(val)) {
                this.warns.add("Senha inválida.");
            } else {
                if (this.warns.has("Senha inválida.")) {
                    this.warns.delete("Senha inválida.");
                }
            }
        },
        passwordConfirm(val) {
            if (val !== this.password) {
                this.warns.add("As senhas não coincidem.");
            } else {
                if (this.warns.has("As senhas não coincidem.")) {
                    this.warns.delete("As senhas não coincidem.");
                }
            }
        },
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
