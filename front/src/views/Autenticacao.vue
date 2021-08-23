<template>
    <div class="block-container">

    <div class="block-center"  style="padding: 7%;"> 

        <img src="@/assets/user2.svg" class="iconMedium" alt="">
        <button class="button btn-large" @click="$router.push('/login')">Login</button>
        <button class="button btn-large" @click="$router.push('/cadastrar')">Cadastro</button>
        <back-button/>

    </div>

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
    margin-bottom: 10px;
}
</style>