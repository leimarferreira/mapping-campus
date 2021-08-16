<template>
    <component :is="currentComponent"></component>
</template>

<script>
import SalasDeAula from '@/views/AddSalasDeAula'
import Coordenacao from '@/views/AddCoordenacao'
import SalaDosProfessores from '@/views/AddSalaDosProfessores'

export default {
    name: "add-evento",
    components: {
        SalasDeAula,
        Coordenacao,
        SalaDosProfessores
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