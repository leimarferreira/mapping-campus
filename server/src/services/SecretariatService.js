const secretariatRepository = require("../persistence/repositories/SecretariatRepository");

const getAll = async () => {
    return await secretariatRepository.getAll();
};

const findById = async id => {
    return await secretariatRepository.findById(id);
};

const save = async event => {
    return await secretariatRepository.save(event);
};

const update = async (id, event) => {
    return await secretariatRepository.update(id, event);
}

const remove = async id => {
    return await secretariatRepository.remove(id);
}

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
