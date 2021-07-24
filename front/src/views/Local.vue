<template>
    <component :is="currentComponent"></component>
</template>

<script>
import SalasDeAula from '@/views/SalasDeAula';
import Coordenacao from '@/views/Coordenacao'

export default {
    name: "local",
    components: {
        SalasDeAula,
        Coordenacao
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