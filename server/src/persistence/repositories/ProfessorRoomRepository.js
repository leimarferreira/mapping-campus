 const pool = require("../dbs/db");

const getAll = async () => {
    try {
        const result = await pool.query(`SELECT * FROM "professorRoom"`);
        return result.rows;
    } catch (error) {
        console.dir(error)
        return error;
    }
};

const findById = async id => {
    try {
        const result = await pool.query(`SELECT * FROM "professorRoom" WHERE id = $1", [id]`);
        return result.rows[0];
    } catch (error) {
        console.dir(error)
        return error;
    }
};

const save = async event => {
    try {
        const result = await pool.query(
            `INSERT INTO "professorRoom"("professorName", "professorEmail", "academicArea", "arrivalTime", "departureTime", "additionalInfo")
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [
                event.professorName, event.professorEmail, event.academicArea, event.arrivalTime,
                event.departureTime, event.additionalInfo
            ]
        );

        return result.rows[0];
    } catch (error) {
        console.dir(error)
        return error;
    }
};

module.exports = {
    getAll,
    findById,
    save
};
