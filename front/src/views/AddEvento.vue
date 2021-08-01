<template>
    <component :is="currentComponent"></component>
</template>

<script>
import SalasDeAula from '@/views/AddSalasDeAula';
import Coordenacao from '@/views/AddCoordenacao'

export default {
    name: "add-evento",
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