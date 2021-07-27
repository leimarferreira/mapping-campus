const pool = require("../dbs/db");

const getAll = async () => {
    try {
        const res = await pool.query("SELECT * FROM places");
        return res.rows;
    } catch (error) {
    }
};

const findById = async (id) => {
    try {
        const res = await pool.query("SELECT * FROM places WHERE id = $1", [id]);
        return res.rows[0];
    } catch (error) {
    }
};

const findBySectorId = async (id) => {
    try {
        const res = await pool.query("SELECT * FROM places WHERE sector_id = $1", [id]);
        return res.rows;
    } catch (error) {
    }
}

const save = async (place) => {
    try {
        await pool.query("INSERT INTO places(name, sector_id) VALUES($1, $2)", [place.name, place.sectorId]);
    } catch (error) {
    }
};

const update = async (id, place) => {
    try {
        await pool.query("UPDATE places SET name = $1, sector_id = $2 WHERE id = $3", [place.name, place.sectorId, id]);
    } catch (error) {
    }
};

const remove = async (id) => {
    try {
        await pool.query("DELETE FROM places WHERE id = $1", [id]);
    } catch (error) {
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
