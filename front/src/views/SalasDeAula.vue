<template>
    <div>
        <div class="pageHeader">
            <PageHeader tittle='Salas de Aula'/>
        </div>

        <form class="block" onsubmit.prevent>
            <h3>Aula</h3>
            <label class="form-label" for="disciplina">Disciplina</label>
            <input required minlength="5" class="form-control-md" name="disciplina" id="disciplina" v-model="aula.disciplina" type="text">
            <label class="form-label" for="codigo">Código da disciplina</label>
            <input required minlength="5" class="form-control-md" name="codigo" id="codigo" v-model="aula.codigo" type="text">
            <label class="form-label" for="turma">Turma</label>
            <input required minlength="5" class="form-control-md" name="turma" id="turma" v-model="aula.turma" type="text">
            <label class="form-label" for="curso">Curso</label>
            <input required minlength="5" class="form-control-md" name="curso" id="curso" v-model="aula.curso" type="text">

            <h3>Professor</h3>
            <label class="form-label" for="nome">Responsável</label>
            <input required minlength="5" class="form-control-md" name="nome" id="nome" v-model="professor.nome"  type="text">
            <label class="form-label" for="email">Email</label>
            <input required  minlength="5" class="form-control-md" name="email" id="email" v-model="professor.email" type="email">

            <h3>Outras informações</h3>
            <label class="form-label" for="outros">Informações adicionais</label>
            <textarea class="form-control-md" name="outros" id="outros" cols="30" rows="10" v-model="informacoesAdicionais"></textarea>

            <div class="buttons">
                <button class="button">Adicionar</button>
            </div>

            <div class="pageFooter">
                <PageFooter/>
            </div>
        </form>
    </div>
</template>

<script>
import api from '@/api/api';
import PageHeader from "../components/PageHeader.vue"
import PageFooter from "../components/PageFooter.vue"

export default {
    name: "SalasDeAula",
    components: {
        PageHeader,
        PageFooter,
    },
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
                tipo: "SalaDeAula",
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