const coordinationRepository = require("../persistence/repositories/CoordinationRepository");

const getAll = async () => {
    return await coordinationRepository.getAll();
}

const findById = async id => {
    return await coordinationRepository.findById(id);
}

const save = async event => {
    return await coordinationRepository.save(event);
};

const update = async (id, event) => {
    return await coordinationRepository.update(id, event);
}

const remove = async id => {
    return await coordinationRepository.remove(id);
}

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
