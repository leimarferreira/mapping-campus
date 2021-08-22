const frontDeskRepository = require("../persistence/repositories/FrontDeskRepository");

const getAll = async () => {
    return await frontDeskRepository.getAll();
};

const findById = async id => {
    return await frontDeskRepository.findById();
};

const save = async event => {
    return await frontDeskRepository.save(event);
};

const update = async (id, event) => {
    return await frontDeskRepository.update(id, event);
};

const remove = async id => {
    return await frontDeskRepository.remove(id);
};

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
