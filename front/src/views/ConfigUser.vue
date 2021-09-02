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
                <button class="buttonCadastroSair" type="button">Excluir</button>
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
        submitForm() {
            const idLocal = this.$route.params.idLocal;
            const configInfo = {
                placeId: idLocal,
                type: this.configInfo.tipo,
                name: this.configInfo.nome,
                email: this.configInfo.email,
                number: this.configInfo.number,
                password: this.configInfo.password,
                };
        },
        async retriveData() {
            const idEvento = this.$route.params.idEvento;
            if (idEvento) {
                const event = (await api.get(`/users/${idEvento}`)).data;
                this.configInfo.nome = event.name;
                this.configInfo.email = event.email;
                this.configInfo.number = event.number;
                this.configInfo.password = event.password;
            }
        }
    },
    created() {
        this.retriveData();
    }
}
</script>
