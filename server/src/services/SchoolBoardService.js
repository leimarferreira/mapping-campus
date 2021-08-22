const schoolBoardRepository = require("../persistence/repositories/SchoolBoardRepository");

const getAll = async () => {
    return await schoolBoardRepository.getAll();
};

const findById = async id => {
    return await schoolBoardRepository.findById(id);
};

const save = async event => {
    return await schoolBoardRepository.save(event);
};

const update = async (id, event) => {
    return await schoolBoardRepository.update(id, event);
}

const remove = async id => {
    return await schoolBoardRepository.remove(id);
}

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
