<template>
<div>
    <BackButton/>
    <h3>Voltar</h3>
</div>
</template>

<script>
import BackButton from "./BackButton.vue"
export default{
    name: "PageFooter",
    components: {
        BackButton,
    }
}
</script>