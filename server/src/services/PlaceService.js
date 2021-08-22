const placeRepository = require("../persistence/repositories/PlaceRepository");

const getAll = async () => {
    return await placeRepository.getAll();
}

const getLimited = async limit => {
    return await placeRepository.getLimited(limit);
}

const findById = async id => {
    return await placeRepository.findById(id);
}

const findBySectorId = async id => {
    return await placeRepository.findBySectorId(id);
}

const save = async record => {
    return await placeRepository.save(record);
}

const update = async (id, record) => {
    return await placeRepository.update(id, record);
}

const remove = async id => {
    return await placeRepository.remove(id);
}

module.exports = {
    getAll,
    findById,
    findBySectorId,
    save,
    update,
    remove
};
