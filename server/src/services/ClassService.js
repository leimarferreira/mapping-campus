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

module.exports = {
    getAll,
    findById,
    save
};
