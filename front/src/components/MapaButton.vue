<template>
    <img src="../assets/mapa2.png"  @click="$router.push('/mapaView/')" width="50" height="50">
</template>

<script>
export default {
    name: "mapa-button"
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

