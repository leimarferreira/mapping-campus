const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const Class = sequelize.define("class", {
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subjectCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    },
    classCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    professorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    professorEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    additionalInfo: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Class;
