const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const ProfessorRoom = sequelize.define("professorRoom", {
    professorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    professorEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    academicArea: {
        type: DataTypes.STRING
    },
    arrivalTime: {
        type: DataTypes.TIME
    },
    departureTime: {
        type: DataTypes.TIME
    },
    additionalInfo: {
        type: DataTypes.TEXT
    }
});

module.exports = ProfessorRoom;
