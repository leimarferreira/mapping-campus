const pool = require("../dbs/db");

const save = async event => {
    try {
        //tabela de coordenação
        const res = await pool.query(
            `INSERT INTO coordination ("name", "email", "viceName", "viceEmail", "opening", "closing", "info")
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [
                event.name, event.email, event.viceName, event.viceEmail,
                event.opening, event.closing, event.info
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
