<template>
    <div>
        <div class="pageHeader">
            <PageHeader title="Sala do professor"/>
        </div>

        <form class="block">
            <h3>Professor</h3>
            
            <label for="nome" class="form-label">Nome</label>
            <input name="nome" id="nome" class="form-control" v-model="salaProfessor.nome" type="text">
            <label class="form-label" for="emailProfessor">Email do professor</label>
            <input required minlength="5" class="form-control-md" name="emailProfessor" id="emailProfessor" v-model="salaProfessor.emailProfessor" type="text">
            <label class="form-label" for="areaAcademica">Área acadêmica</label>
            <input required minlength="5" class="form-control-md" name="areaAcademica" id="areaAcademica" v-model="salaProfessor.areaAcademica" type="text">
            <label class="form-label" for="horaChegada">hora de chegada</label>
            <input required minlength="5" class="form-control-md" name="horaChegada" id="horaChegada" v-model="salaProfessor.horaChegada" type="text">
            <label class="form-label" for="horaSaida">Hora De saída</label>
            <input required minlength="5" class="form-control-md" name="horaSaida" id="horaSaida" v-model="salaProfessor.horaSaida" type="text">
            <h3>Outras informações</h3>
            <label class="form-label" for="info">Informações adicionais</label>
            <textarea class="form-control-md" name="info" id="info" cols="30" rows="10" v-model="salaProfessor.info"></textarea>

           <div class="buttons">
                <button class="button" @click.prevent="submitForm">Adicionar</button>
            </div>
        </form>

        <div class="pageFooter">
            <PageFooter/>
        </div>
    </div>
</template>

<script>
import api from '@/api/api';
import PageHeader from "../components/PageHeader.vue"
import PageFooter from "../components/PageFooter.vue"

export default {
    name: "SalaDosProfessores",
    components: {
        PageHeader,
        PageFooter,
    },
    data() {
        return {
            salaProfessor: {
                tipo: "salaProfessor",
                nome: "",
                emailProfessor: "",
                areaAcademica: "",
                horaChegada: "",
                horaSaida: "",
                info: ""
            }
            
        }
    },
    methods: {
        submitForm() {
            const idLocal = this.$route.params.idLocal;
            api.post("/events", {
                placeId: idLocal,
                type: this.salaProfessor.tipo,
                name: this.aula.nome,
                professorName: this.salaProfessor.nome,
                professorEmail: this.salaProfessor.emailProfessor,
                academicArea: this.salaProfessor.areaAcademica,
                arrivalTime: this.salaProfessor.horaChegada,
                departureTime: this.salaProfessor.horaSaida,
                additionalInfo: this.info
            });
        },
        async retriveData() {
            const idEvento = this.$route.params.idEvento;
            if (idEvento) {
                const event = (await api.get(`/events/${idEvento}`)).data;
                this.salaProfessor.nome = event.name;
                this.salaProfessor.emailProfessor = event.professorEmail;
                this.salaProfessor.areaAcademica = event.academicArea;
                this.salaProfessor.horaChegada = event.arrivalTime;
                this.salaProfessor.horaSaida = event.departureTime;
                this.salaProfessor.info = event.additionalInfo;
            }
        }
    },
    created() {
        this.retriveData();
    }
}
</script>