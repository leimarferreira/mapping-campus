const sequelize = require("./config");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "O nome não pode ser vazio."
            }
        },
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "O número não pode ser vazio."
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "O email não pode ser vazio."
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "A senha não pode ser vazia."
            }
        }
    }
});

module.exports = User;
