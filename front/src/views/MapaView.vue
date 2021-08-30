<template>
    <div class="main" >
        <div class="topInlineForm">
            <PageFooter/>
            <h1 class="tituloMapas">Guia da Universidade</h1>
            <img v-if="isMapVisible3" src="@/assets/3.png" class="imagemMapas" width="1100" height="400" alt="" >
            <img v-if="isMapVisible4" src="@/assets/4.png" class="imagemMapas" width="1100" height="400" alt="" >
            <img v-if="isMapVisible1" src="@/assets/2.png" class="imagemMapas" width="1100" height="400" alt="" >
            <img v-if="isMapVisible2" src="@/assets/1.png" class="imagemMapas" width="1100" height="400" alt="" >
            <div class="buttonsBlockMapas">
                <button class="buttonMapas" @click="handleClickAdmInferior">
                Bloco Administrativo Inferior
                </button>

                <button class="buttonMapas" @click="handleClickAdmSuperior">
                Bloco Administrativo Superior
                </button> 

                <button class="buttonMapas" @click="handleClickEstudantilInferior">
                Bloco estudantil Inferior
                </button>

                <button class="buttonMapas" @click="handleClickEstudantilSuperior">
                <br>
                Bloco estudantil Superior
                </button>

            </div>
        </div>
    </div>
    
</template>

<script>
import PageFooter from '../components/PageFooter.vue'
export default {
    name: "Mapas",
    components: {
        PageFooter
    },
    data() {
        return {
            isMapVisible1: false,
            isMapVisible2: false,
            isMapVisible3: false,
            isMapVisible4: false
            
        }
    },
    methods:{
        handleClickAdmInferior(){
            this.isMapVisible1 = !this.isMapVisible;
            this.isMapVisible2 = false,
            this.isMapVisible3 = false,
            this.isMapVisible4 = false
        },
        handleClickAdmSuperior(){
            this.isMapVisible2 = !this.isMapVisible;
            this.isMapVisible1 = false,
            this.isMapVisible3 = false,
            this.isMapVisible4 = false
        },
        handleClickEstudantilInferior(){
            this.isMapVisible3 = !this.isMapVisible;
            this.isMapVisible1 = false,
            this.isMapVisible2 = false,
            this.isMapVisible4 = false

        },
        handleClickEstudantilSuperior(){
            this.isMapVisible4 = !this.isMapVisible;
            this.isMapVisible1 = false,
            this.isMapVisible2 = false,
            this.isMapVisible3 = false
        }
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>