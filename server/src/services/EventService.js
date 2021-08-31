const eventRepository = require("../persistence/repositories/EventRepository");

const getAll = async () => {
    return await eventRepository.getAll();
};

const getLimited = async limit => {
    return await eventRepository.getLimited(limit);
}

const findById = async id => {
    return await eventRepository.findById(id);
};

const findByPlaceId = async id => {
    return await eventRepository.findByPlaceId(id);
};

const findByName = async name => {
    return await eventRepository.findByName(name);
}

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
    findByName,
    getLimited,
    save,
    update,
    remove
};