<template>
    <div class="flexblock">
        <router-link class="circle" to="/setores">Atividades</router-link>
        <p class="circle largeTitle">Mapping Campus</p>
        <router-link class="circle" to="/autenticacao">Administração</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.circle {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    min-height: 300px;
    border-radius: 150px;
    text-decoration: none;
    color: #388c91;
    font-weight: bold;
}
</style>