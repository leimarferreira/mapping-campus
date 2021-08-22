const { Place } = require("../../models/");

const getAll = async () => {
    try {
        const places = await Place.findAll();
        return places;
    } catch (error) {
        throw error;
    }
};

const getLimited = async (limit) => {
    try {
        const res = await pool.query(`SELECT * FROM places LIMIT ${limit}`)
        return res.rows;
    } catch (error) {
        return error;
    }
}

const findById = async (id) => {
    try {
        const place = await Place.findOne({
            where: {
                id: id
            }
        });

        return place;
    } catch (error) {
        throw error;
    }
};

const findBySectorId = async (id) => {
    try {
        const place = await Place.findAll({
            where: {
                sectorId: id
            }
        });

        return place;
    } catch (error) {
        throw error;
    }
}

const save = async (record) => {
    try {
        const place = Place.build({
            name: record.name,
            sectorId: record.sectorId
        });

        await place.save();
        return place;
    } catch (error) {
        throw error;
    }
};

const update = async (id, record) => {
    try {
        const place = await Place.update({
            name: record.name,
            sectorId: record.sectorId
        }, {
            where: {
                id: id
            },
            returning: true
        });

        return place[1][0];
    } catch (error) {
        throw error;
    }
};

const remove = async (id) => {
    try {
        const place = await Place.destroy({
            where: {
                id: id
            },
            returning: true
        });

        return place;
    } catch (error) {
        throw error;
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
