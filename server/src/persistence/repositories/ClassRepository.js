const pool = require("../dbs/db");

const getAll = async () => {
    try {
        const res = await pool.query("SELECT * FROM classes");
        return res.rows;
    } catch (error) {
        return error;
    }
};

const findById = async id => {
    try {
        const res = await pool.query("SELECT * FROM classes WHERE id = $1", [id]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const save = async event => {
    try {
        const res = await pool.query(
            `INSERT INTO classes("subject", "subjectCode", "course", "classCode", "professorName", "professorEmail", "additionalInfo")
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [
                event.subject, event.subjectCode, event.course, event.classCode,
                event.professorName, event.professorEmail, event.additionalInfo
            ]
        );

        return res.rows[0];
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAll,
    findById,
    save
};
