const sequelize = require("./config");
const { DataTypes } = require("sequelize");

/* TODO: remover isso class Class {
    constructor(subject, subjectCode, course, classCode, professorName, professorEmail, additionalInfo) {
        this.subject = subject;
        this.subjectCode = subjectCode;
        this.course = course;
        this.classCode = classCode;
        this.professorName = professorName;
        this.professorEmail = professorEmail;
        this.additionalInfo = additionalInfo;
    }
} */

const Class = sequelize.define("Class", {
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
