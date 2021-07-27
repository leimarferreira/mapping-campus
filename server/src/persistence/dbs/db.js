const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const query = (text, params) => pool.query(text, params);

module.exports = { query };
