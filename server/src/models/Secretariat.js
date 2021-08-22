const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const Secretariat = sequelize.define("Secretariat", {
    responsibleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responsibleEmail: {
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

module.exports = Secretariat;
