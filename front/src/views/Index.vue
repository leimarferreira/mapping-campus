<template>
    

    <div class="flexblock">
        <div class=logo>
        <img src="@/assets/logoTransparente.png" width="300" height="300" alt="">
    </div>

        <router-link class="circle" to="/setores"> 
        <img src="@/assets/atividade.svg" width="200" height="200" alt="">
       <p> Atividades</p>
        </router-link>
        

        <div class="circle">  <img src="@/assets/mapa.png"  width="180" height="180" alt="">
             <p> Mapa do campus</p>
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