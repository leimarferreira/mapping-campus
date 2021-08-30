const { ProfessorRoom, Event } = require("../../models/");

const getAll = async () => {
    try {
        const professorRoomInfos = await ProfessorRoom.findAll({
            include: { all: true }
        });
        
        return professorRoomInfos;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const professorRoomInfo = ProfessorRoom.findOne({
            where: {
                eventId: id
            },
            include: { all: true }
        });

        return professorRoomInfo;
    } catch (error) {
        throw error;
    }
};

const save = async event => {
    try {
        const professorRoomInfo = ProfessorRoom.build({
            professorName: event.professorName,
            professorEmail: event.professorEmail,
            academicArea: event.academicArea,
            arrivalTime: event.arrivalTime,
            departureTime: event.departureTime,
            additionalInfo: event.additionalInfo,
            eventId: event.eventId
        });

        await professorRoomInfo.save();
        return professorRoomInfo;
    } catch (error) {
        throw error;
    }
};

const update = async (id, event) => {
    try {
        const professorRoomInfo = await ProfessorRoom.update({
            professorName: event.professorName,
            professorEmail: event.professorEmail,
            academicArea: event.academicArea,
            arrivalTime: event.arrivalTime,
            depatureTime: event.depatureTime,
            additionalInfo: event.additionalInfo
        }, {
            where: {
                eventId: id
            },
            returning: true
        });

        return professorRoomInfo[1][0];
    } catch (error) {
        throw error;
    }
}

const remove = async id => {
    try {
        const professorRoomInfo = await findById(id);
        return await Event.destroy({
            where: {
                id: professorRoomInfo.eventId
            }
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
