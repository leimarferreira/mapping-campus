const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const Coordination = sequelize.define("coordination", {
    coordinatorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coordinatorEmail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    viceCoordinatorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    viceCoordinatorEmail: {
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

module.exports = Coordination;
