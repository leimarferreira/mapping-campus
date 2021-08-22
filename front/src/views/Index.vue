<template>
    <div class="flexblock">

        <router-link class="circle" to="/setores"> 
        <img src="@/assets/atividade.svg" width="200" height="200" alt="">
       <p> Atividades</p>
        </router-link>

        <div class="circle">  <img src="@/assets/logo.jpeg"  width="225" height="200" alt="">
          </div>

        <router-link class="circle" to="/autenticacao">
        <img src="@/assets/adm.svg"  width="180" height="180" alt="">
       <p> Administração</p>
        </router-link>
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
    flex-direction: column;
    text-decoration: none;
    color: #388c91;
    font-weight: bold;
}
</style>