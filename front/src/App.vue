<template>
    <router-view/>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            isLoggedIn: false,
            currentUserId: -1
        }
    }
}
</script>

<style>
</style>
