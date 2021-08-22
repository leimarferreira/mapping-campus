const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const query = (text, params) => pool.query(text, params);

module.exports = { query };
