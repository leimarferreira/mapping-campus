<template>
    <div class="block">
        <img src="@/assets/user2.svg" class="iconMedium" alt="">
        <button class="button btn-large" @click="$router.push('/cadastrar')">Cadastro</button>
        <button class="button btn-large" @click="$router.push('/login')">Login</button>
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

<style scoped>
button {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>