const classRepository = require("../persistence/repositories/ClassRepository");

const getAll = async () => {
    return await classRepository.getAll();
};

const findById = async id => {
    return await classRepository.findById(id);
};

const save = async event => {
    return await classRepository.save(event);
};

const update = async (id, event) => {
    return await classRepository.update(id, event);
};

const remove = async id => {
    return await classRepository.remove(id);
};

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
