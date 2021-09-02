<template>
    <img src="../assets/logout.png" alt="" width="50" height="50" @click="logout">
</template>

<script>
import api from "@/api/api";

export default {
    name: "logout-button",
    methods: {
        async logout() {
            await api.get("/authentication/logout");
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
img {
    align-self: center;
    max-width: 30px;
    max-height: 30px;
    margin-left: 1%;
    margin-top: 1%;
    }

img:hover {
    cursor: pointer;
}
</style>