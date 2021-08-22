const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const Event = sequelize.define("Event", {
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
