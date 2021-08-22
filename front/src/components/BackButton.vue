<template>
    <img src="../assets/arrow_left.svg" @click="$router.go(-1)">
</template>

<script>
export default {
    name: "back-button"
}
</script>

<style scoped>
img {
    align-self: center;
    max-width: 50px;
    max-height: 50px;
    margin: auto;
}

img:hover {
    cursor: pointer;
}
</style>

