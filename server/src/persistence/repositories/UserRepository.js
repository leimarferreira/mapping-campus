const pool = require("../dbs/db");

const getAll = async () => {
    try {
        const res = await pool.query("SELECT * FROM users");
        return res.rows;
    } catch (error) {
        return error;
    }
};

const getLimited = async (limit) => {
    try {
        const res = await pool.query(`SELECT * FROM users LIMIT ${limit}`)
        return res.rows;
    } catch (error) {
        return error;
    }
}

const findById = async id => {
    try {
        const res = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const findByEmail = async email => {
    try {
        const res = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

const save = async user => {
    try {
        const res = await pool.query(`INSERT INTO users(name, number, email, password)
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [user.name, user.number, user.email, user.password]);
        return res.rows[0];
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAll,
    findById,
    findByEmail,
    save
};
