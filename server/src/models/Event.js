const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const Event = sequelize.define("event", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Event;
