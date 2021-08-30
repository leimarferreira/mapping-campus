<template>
    

    <div class="flexblock">
        <div class=logo>
        <img src="@/assets/logoTransparente.png" width="300" height="300" alt="">
    </div>

        <router-link class="homeIcons" to="/setores"> 
            <span><img src="@/assets/adm.svg" width="200" height="200" alt=""></span>
            <p> Atividades</p>
        </router-link>
        
        <router-link class="homeIcons" to="/MapaView"> 
            <span><img src="@/assets/mapa.png"  width="180" height="180" alt=""></span>
            <p> Mapa do campus</p>
        </router-link>

       <router-link class="homeIcons" to="/autenticacao">
        <span><img src="@/assets/atividade.svg"  width="180" height="180" alt=""></span>
        <p> Administração</p>
        
       
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>