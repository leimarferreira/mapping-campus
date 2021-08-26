const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const Place = sequelize.define("place", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sectorId: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Place;
