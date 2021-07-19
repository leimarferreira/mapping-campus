<template>
    <div class="block">
        <img src="@/assets/user2.svg" class="iconMedium" alt="">
        <router-link class="btnlink" to="/cadastrar">Cadastro</router-link>
        <router-link class="btnlink" to="/login">Login</router-link>
        <back-button/>
    </div>
</template>

<script>
import BackButton from '@/components/BackButton';
export default {
    components: {
        BackButton
    }
}
</script>

<style>

</style>