const treasuryRepository = require("../persistence/repositories/TreasuryRepository");

const getAll = async () => {
    return await treasuryRepository.getAll();
};

const findById = async id => {
    return await treasuryRepository.findById(id);
};

const save = async event => {
    return await treasuryRepository.save(event);
};

const update = async (id, event) => {
    return await treasuryRepository.update(id, event);
}

const remove = async id => {
    return await treasuryRepository.remove(id);
}

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
