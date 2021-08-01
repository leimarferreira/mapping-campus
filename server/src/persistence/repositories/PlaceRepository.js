const pool = require("../dbs/db");

const getAll = async () => {
    try {
        const res = await pool.query("SELECT * FROM places");
        return res.rows;
    } catch (error) {
        return error;
    }
};

const findById = async (id) => {
    try {
        const res = await pool.query("SELECT * FROM places WHERE id = $1", [id]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const findBySectorId = async (id) => {
    try {
        const res = await pool.query('SELECT * FROM places WHERE "sectorId" = $1', [id]);
        return res.rows;
    } catch (error) {
        return error;
    }
}

const save = async (place) => {
    try {
        const res = await pool.query('INSERT INTO places("name", "sectorId") VALUES($1, $2) RETURNING *',
        [place.name, place.sectorId]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const update = async (id, place) => {
    try {
        const res = await pool.query('UPDATE places SET name = $1, sectorId = $2 WHERE id = $3 RETURNING *',
        [place.name, place.sectorId, id]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const remove = async (id) => {
    try {
        const res = await pool.query("DELETE FROM places WHERE id = $1 RETURNING *", [id]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAll,
    findById,
    findBySectorId,
    save,
    update,
    remove
};
