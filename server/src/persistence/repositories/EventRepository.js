const classRepository = require("./ClassRepository");
const { Event } = require("../../models/");

const eventTypes = {
    "class": classRepository
};

const getAll = async () => {
    try {
        const events = await Event.findAll();
        return events;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const event = await Event.findOne({
            where: {
                id: id
            }
        });

        return event;
    } catch (error) {
        return error;
    }
};

const findByPlaceId = id => {
    // TODO
};

const save = async record => {
    try {
        const event = Event.build({
            name: record.name,
            type: record.type
        });

        await event.save();
        return event;
    } catch (error) {
        throw error;
    }
};

const update = async (id, record) => {
    try {
        const event = await Event.update({
            name: record.name,
            type: record.type
        }, {
            where: {
                id: id
            },
            returning: true
        });

        return event[1][0];
    } catch (error) {
        throw error;
    }
};

const remove = async id => {
    try {
        const event = await Event.destroy({
            where: {
                id: id
            }
        });

        return event;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAll,
    findById,
    findByPlaceId,
    save,
    update,
    remove
};
