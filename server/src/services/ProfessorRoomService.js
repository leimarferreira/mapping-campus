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

const update = async (id, event) => {
    return await professorRoomRepository.update(id, event);
}

const remove = async id => {
    return await professorRoomRepository.remove(id);
}

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
