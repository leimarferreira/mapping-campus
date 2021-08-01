const pool = require("../dbs/db");
const classRepository = require("./ClassRepository");

const eventTypes = {
    "class": classRepository
};

const getAll = async () => {
    try {
        const res = await pool.query("SELECT * FROM events");
        return res.rows;
    } catch (error) {
        return error;
    }
};

const findById = async id => {
    try {
        const res = await pool.query("SELECT * FROM events where id = $1", [id]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const findByPlaceId = id => {
    // TODO
};

const save = async event => {
    try {
        const res = await pool.query(
            'INSERT INTO events (name, type, "eventId") VALUES ($1, $2, $3) RETURNING *',
            [event.name, event.type, event.eventId]);
        
        await pool.query(
            'INSERT INTO event_place("eventId", "placeId") VALUES ($1, $2)',
            [res.rows[0].id, event.placeId]
        );

        event.id = res.rows[0].id;

        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const update = async (id, event) => {
    try {
        const res = await pool.query(
            "UPDATE events SET name = $1, type = $2 WHERE id = $3 RETURNING *",
            [event.name, event.type, id]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const remove = async id => {
    try {
        const res = await pool.query(
            "DELETE FROM event WHERE id = $1 RETURNING * RETURNING *", [id]);
        return res.rows[0];
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
