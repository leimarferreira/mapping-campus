const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    database: process.env.DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    define: {
        timestamps: false
    },
    sync: {
        alter: true
    }
});


(async () => {
    await sequelize.sync();
})();

module.exports = sequelize;
