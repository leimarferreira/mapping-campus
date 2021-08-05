const pool = require("../dbs/db");

const save = async event => {
    try {

        const res = await pool.query(
            `INSERT INTO treasury ("name", "email", "opening", "closing", "info")
            VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [
                event.name, event.email, event.opening, event.closing, event.info
            ]
        );

        return res.rows[0];
    } catch (error) {
        return error;
    }
};

module.exports = {
    save
};
