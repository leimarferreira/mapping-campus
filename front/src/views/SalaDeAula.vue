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

            <input type="submit" value="Adicionar">
        </form>
    </div>
</template>

<script>
export default {
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
    
}
</script>

<style>

</style>