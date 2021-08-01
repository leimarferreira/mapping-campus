<template>
    <component :is="currentComponent"></component>
</template>

<script>
import AddSalasDeAula from '@/views/AddSalasDeAula';
import AddCoordenacao from '@/views/AddCoordenacao'

export default {
    name: "local",
    components: {
        AddSalasDeAula,
        AddCoordenacao
    },
    data() {
        return {
            currentComponent: ""
        }
    },
    beforeRouteEnter(to, from, next) {
        const idSetor = to.params.idSetor;

        next(vm => {
            vm.currentComponent = idSetor;
        });
    }
}
</script>

<style>

</style>