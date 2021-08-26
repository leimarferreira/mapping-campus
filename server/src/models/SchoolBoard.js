const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const SchoolBoard = sequelize.define("schoolBoard", {
    directorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    directorEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    viceDirectorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    viceDirectorEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    openingTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    closingTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    additionalInfo: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = SchoolBoard;
