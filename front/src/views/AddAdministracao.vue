<template>
    <div>
        <select name="component" id="component" v-model="currentComponent">
            <option value="diretoria">Diretoria</option>
            <option value="recepcao">Recepção</option>
            <option value="secretaria">Secretaria</option>
            <option value="tesouraria">Tesouraria</option>
        </select>
        <component :is="currentComponent"/>
    </div>
</template>

<script>
import api from "@/api/api";
import Diretoria from "@/views/AddDiretoria";
import Recepcao from "@/views/AddRecepcao";
import Secretaria from "@/views/AddSecretaria";
import Tesouraria from "@/views/AddTesouraria";

export default {
    components: {
        Diretoria,
        Recepcao,
        Secretaria,
        Tesouraria
    },
    data() {
        return {
            currentComponent: ""
        }
    },
    async created() {
        if (this.$route.params.idEvento) {
            const event = (await api.get(`/events/${this.$route.params.idEvento}`)).data;
            this.currentComponent = event.type;
        } else {
            this.currentComponent = "diretoria";
        }
    }
}
</script>
