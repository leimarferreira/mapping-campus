const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const ProfessorRoom = sequelize.define("professorRoom", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    academicArea: {
        type: DataTypes.STRING,
    },
    arrivaltime: {
        type: DataTypes.TIME
    },
    departureTime: {
        type: DataTypes.TIME,
    },
    additionalInfo: {
        type: DataTypes.TEXT
    }
});

module.exports = ProfessorRoom;
