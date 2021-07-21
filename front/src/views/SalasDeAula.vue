<template>
    <div>
        <h1>Sala de aula</h1>
        <form onsubmit.prevent>
            <h3>Aula</h3>

            <label for="disciplina">Disciplina</label>
            <input type="text" name="disciplina" id="disciplina" v-model="aula.disciplina">
            <label for="codigo">Código da disciplina</label>
            <input type="text" name="codigo" id="codigo" v-model="aula.codigo">
            <label for="turma">Turma</label>
            <input type="text" name="turma" id="turma" v-model="aula.turma">
            <label for="curso">Curso</label>
            <input type="text" name="curso" id="curso" v-model="aula.curso">

            <h3>Professor</h3>

            <label for="nome">Responsável</label>
            <input type="text" name="nome" id="nome" v-model="professor.nome">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="professor.email">

            <h3>Outras informações</h3>
            <label for="outros">Informações adicionais</label>
            <textarea name="outros" id="outros" cols="30" rows="10" v-model="informacoesAdicionais"></textarea>

            <button class="button" @click.prevent="submitForm">Adicionar</button>
        </form>
    </div>
</template>

<script>
import api from '@/api/api';

export default {
    name: "salas-de-aula",
    data() {
        return {
            aula: {
                disciplina: "",
                codigo: "",
                turma: "",
                curso: "",
            },
            professor: {
                nome: "",
                email: "",
            },
            informacoesAdicionais: ""
        }
    },
    methods: {
        submitForm() {
            const idSetor = this.$route.params.idSetor;
            api.post("/places", {
                tipo: "sala-de-aula",
                idSetor: idSetor,
                data: {
                    aula: this.aula,
                    professor: this.professor,
                    informacoesAdicionais: this.informacoesAdicionais
                }
            });
        }
    }
}
</script>

<style scoped>
* {
    display: block;
}
</style>