<template>
<div class="backButton">
        <PageFooter/>
</div>
<div class="block-container"> 
    <form id="form" class="block-center"  style="padding: 3%;" method="post" @submit.prevent>
            <img class="iconMedium"  src="../assets/user2.svg">
            <img class="iconMedium" src="resources\icons\user2.svg" alt="">
            <label class="form-label" for="name">Nome:</label>
            <input required class="form-control-md" type="text" name="name" id="name" v-model="name">
            <label class="form-label" for="email">Email:</label>
            <input required class="form-control-md" type="email" name="email" id="email" v-model="email">
            <label class="form-label" for="number">Número do servidor:</label>
            <input required class="form-control-md" type="number" name="number" id="number" v-model="number">
            <label class="form-label" for="password">Senha:</label>
            <input required class="form-control-md" type="password" name="password" id="password" v-model="password">
            <div class="buttons">
                <button class="buttonCadastroSair" type="button" @click="remove">Excluir</button>
                <button id="submit" class="buttonCadastroConfirma" type="submit" @click="submitForm">Atualizar</button>
            </div>
        </form>
</div>
</template>

<script>
import api from "@/api/api";
import PageFooter from '../components/PageFooter.vue';

export default {
    data() {
        return {
            name: "",
            email: "",
            number: "",
            password: "",
        }
    },
    components: {
        PageFooter
    },
    methods: {
        async submitForm() {
            const userInfo = {
                name: this.name,
                email: this.email,
                number: this.number,
                password: this.password
            };

            const userId = this.$root.$data.currentUserId;

            if (userId != -1) {
                await api.put(`/users/${userId}`, userInfo);
            }

            this.retriveData();
        },
        async retriveData() {
            const userId = this.$root.$data.currentUserId;

            if (userId != -1) {
                const userInfo = (await api.get(`/users/${userId}`)).data;

                this.name = userInfo.name;
                this.email = userInfo.email;
                this.number = userInfo.number;
                this.password = userInfo.password;
            }
        },
        async remove() {
            const userId = this.$root.$data.currentUserId;

            if (userId != -1) {
                await api.delete(`/users/${userId}`);
                await api.get("/authentication/logout");
                this.$router.push("/");
            }
        }
    },
    created() {
        this.retriveData();
    }
}
</script>
