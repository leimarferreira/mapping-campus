const sequelize = require("./config");
const { DataTypes } = require("sequelize");

/* class Event {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
} */

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
