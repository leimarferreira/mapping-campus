<template>
    <img src="../assets/config.png"  @click="$router.push('/configUser/')" width="50" height="50">
</template>

<script>
export default {
    name: "config-button"
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

