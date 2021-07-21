<template>
    <component :is="currentComponent"></component>
</template>

<script>
import SalasDeAula from '@/views/SalasDeAula';

export default {
    name: "local",
    components: {
        SalasDeAula
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