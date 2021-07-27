const placeDAO = require("../persistence/daos/PlaceDAO");

const getAll = async () => {
    return await placeDAO.getAll();
}

const findById = async id => {
    return await placeDAO.findById(id);
}

const findBySectorId = async id => {
    return await placeDAO.findBySectorId(id);
}

const save = async place => {
    await placeDAO.save(place);
}

const update = async (id, place) => {
    await placeDAO.update(id, place);
}

const remove = async id => {
    await placeDAO.remove(id);
}

module.exports = {
    getAll,
    findById,
    findBySectorId,
    save,
    update,
    remove
}