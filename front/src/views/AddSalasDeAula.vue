<template>
    <div>
        <div class="pageHeader">
            <PageHeader title='Salas de Aula'/>
        </div>

        <div class="block">
            <h3>Aula</h3>
            <label for="nome" class="form-label">Nome</label>
            <input type="text" name="nome" id="nome" class="form-control" v-model="aula.nome">
            <label class="form-label" for="disciplina">Disciplina</label>
            <input required minlength="5" class="form-control-md" name="disciplina" id="disciplina" v-model="aula.disciplina" type="text">
            <label class="form-label" for="codigo">Código da disciplina</label>
            <input required minlength="5" class="form-control-md" name="codigo" id="codigo" v-model="aula.codigoDisciplina" type="text">
            <label class="form-label" for="turma">Turma</label>
            <input required class="form-control-md" name="turma" id="turma" v-model="aula.codigoTurma" type="text">
            <label class="form-label" for="curso">Curso</label>
            <input required minlength="5" class="form-control-md" name="curso" id="curso" v-model="aula.curso" type="text">

            <h3>Professor</h3>
            <label class="form-label" for="nome">Responsável</label>
            <input required minlength="5" class="form-control-md" name="nome" id="nome" v-model="aula.nomeProfessor"  type="text">
            <label class="form-label" for="email">Email</label>
            <input required  minlength="5" class="form-control-md" name="email" id="email" v-model="aula.emailProfessor" type="email">

            <h3>Outras informações</h3>
            <label class="form-label" for="outros">Informações adicionais</label>
            <textarea class="form-control-md" name="outros" id="outros" cols="30" rows="5" v-model="aula.informacoesAdicionais"></textarea>

            <div class="buttons">
                <button class="button" @click.prevent="submitForm" v-if="$root.$data.isLoggedIn">Enviar</button>
            </div>

            <div class="pageFooter">
                <PageFooter/>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/api';
import PageHeader from "../components/PageHeader.vue"
import PageFooter from "../components/PageFooter.vue"

export default {
    name: "salas-de-aula",
    components: {
        PageHeader,
        PageFooter,
    },
    data() {
        return {
            aula: {
                tipo: "aula",
                nome: "",
                disciplina: "",
                codigoDisciplina: "",
                curso: "",
                codigoTurma: "",
                nomeProfessor: "",
                emailProfessor: "",
                informacoesAdicionais: ""
            }
        }
    },
    methods: {
        submitForm() {
            const idLocal = this.$route.params.idLocal;

            const classRoom = {
                placeId: idLocal,
                type: this.aula.tipo,
                name: this.aula.nome,
                subject: this.aula.disciplina,
                subjectCode: this.aula.codigoDisciplina,
                course: this.aula.curso,
                classCode: this.aula.codigoTurma,
                professorName: this.aula.nomeProfessor,
                professorEmail: this.aula.emailProfessor,
                additionalInfo: this.aula.informacoesAdicionais
            };

            if (this.$route.params.idEvento) {
                api.put(`/classes/${this.$route.params.idEvento}`, classRoom);
            } else {
                api.post("/classes", classRoom);
            }
        },
        async retriveData() {
            const idEvento = this.$route.params.idEvento;
            if (idEvento) {
                const _class = (await api.get(`/classes/${idEvento}`)).data;
                this.aula.disciplina = _class.subject;
                this.aula.codigoDisciplina = _class.subjectCode;
                this.aula.curso = _class.course;
                this.aula.codigoTurma = _class.classCode;
                this.aula.nomeProfessor = _class.professorName;
                this.aula.emailProfessor = _class.professorEmail;
                this.aula.informacoesAdicionais = _class.additionalInfo;

                this.aula.nome = _class.event.name;
            }
        }
    },
    created() {
        this.retriveData();
    }
}
</script>