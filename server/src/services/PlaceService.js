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

const save = async place => {
    return await placeRepository.save(place);
}

const update = async (id, place) => {
    return await placeRepository.update(id, place);
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
