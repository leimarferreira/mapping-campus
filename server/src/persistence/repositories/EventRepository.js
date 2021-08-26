const { Event } = require("../../models/");

const getAll = async () => {
    try {
        const events = await Event.findAll({
            include: { all: true, nested: true }
        });
        return events;
    } catch (error) {
        throw error;
    }
};

const getLimited = async (limit) => {
    try {
        const res = await pool.query(`SELECT * FROM events LIMIT ${limit}`)
        return res.rows;
    } catch (error) {
        return error;
    }
}

const findById = async id => {
    try {
        const event = await Event.findOne({
            where: {
                id: id
            },
            include: {
                all: true,
                nested: true
            }
        });

        return event;
    } catch (error) {
        return error;
    }
};

const findByPlaceId = async id => {
    try {
        const events = await Event.findAll({
            where: {
                placeId: id
            },
            include: {
                all: true,
                nested: true
            }
        });

        return events;
    } catch (error) {
        return error;
    }
};

const save = async record => {
    try {
        const event = Event.build({
            name: record.name,
            type: record.type,
            placeId: record.placeId
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
            type: record.type,
            placeId: record.placeId
        }, {
            where: {
                id: id
            },
            returning: true,
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
