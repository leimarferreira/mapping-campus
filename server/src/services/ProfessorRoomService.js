const professorRoomRepository = require("../persistence/repositories/ProfessorRoomRepository");

const getAll = async () => {
    return await professorRoomRepository.getAll();
};

const findById = async id => {
    return await professorRoomRepository.findById(id);
};

const save = async event => {
    return await professorRoomRepository.save(event);
};

module.exports = {
    getAll,
    findById,
    save
};
