<template>
    <div class="main" >
        <div class="topInlineForm">
            <PageFooter/>
            <h1 class="tituloMapas">Guia da Universidade</h1>
            <img v-if="isMapVisible3" :src="map3URL" class="imagemMapas" width="1100" height="400" alt="" >
            <img v-if="isMapVisible4" :src="map4URL" class="imagemMapas" width="1100" height="400" alt="" >
            <img v-if="isMapVisible1" :src="map1URL" class="imagemMapas" width="1100" height="400" alt="" >
            <img v-if="isMapVisible2" :src="map2URL" class="imagemMapas" width="1100" height="400" alt="" >
            <form action="" v-if="$root.$data.isLoggedIn">
                <label for="map-type">Selecione o mapa para fazer upload</label>
                <select name="map-type" id="map-type" v-model="selectedMap">
                    <option value="map1">Bloco Administrativo Inferior</option>
                    <option value="map2">Bloco Administrativo Superior</option>
                    <option value="map3">Bloco estudantil Inferior</option>
                    <option value="map4">Bloco estudantil Superior</option>
                </select>
                <label for="image">Imagem</label>
                <input ref="image" type="file" name="image" id="image">
                <button @click.prevent="upload">Fazer upload</button>
            </form>
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
                Bloco estudantil Superior
                </button>

            </div>
        </div>
    </div>
    
</template>

<script>
import api from '@/api/api';
import PageFooter from '../components/PageFooter.vue'
export default {
    name: "Mapas",
    components: {
        PageFooter
    },
    data() {
        return {
            isMapVisible1: true,
            isMapVisible2: false,
            isMapVisible3: false,
            isMapVisible4: false,
            map1URL: "http://localhost:3000/maps/map1.png",
            map2URL: "http://localhost:3000/maps/map2.png",
            map3URL: "http://localhost:3000/maps/map3.png",
            map4URL: "http://localhost:3000/maps/map4.png",
            selectedMap: ""
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
        },
        async upload() {
            let form = new FormData();
            form.append("filename", this.selectedMap);
            form.append("map", this.$refs.image.files[0]);
            await api.post("/maps", form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            this.$forceUpdate();
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
