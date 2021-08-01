const eventRepository = require("../persistence/repositories/EventRepository");

const getAll = async () => {
    return await eventRepository.getAll();
};

const findById = async id => {
    return await eventRepository.findById(id);
};

const findByPlaceId = id => {
    // TODO
};

const save = async event => {
    return await eventRepository.save(event);
};

const update = async (id, event) => {
    return await eventRepository.update(id, event);
};

const remove = async id => {
    return await eventRepository.remove(id);
};

module.exports = {
    getAll,
    findById,
    findByPlaceId,
    save,
    update,
    remove
};