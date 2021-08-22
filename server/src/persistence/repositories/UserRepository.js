const { User } = require("../../models");

const getAll = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const user = await User.findOne({
            where: {
                id: id
            }
        });

        return user;
    } catch (error) {
        throw error;
    }
};

const findByEmail = async email => {
    try {
        const user = User.findOne({
            where: {
                email: email
            }
        });

        return user;
    } catch (error) {
        throw error;
    }
};

const save = async record => {
    try {
        const user = User.build({
            name: record.name,
            number: record.number,
            email: record.email,
            password: record.password
        });

        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};

const update = async (id, record) => {
    try {
        const user = await User.update({
            name: record.name,
            number: record.number,
            email: record.email,
            password: record.password
        }, {
            where: {
                id: id
            },
            returning: true
        });

        // Sequelize retorna um array com duas posições. Na primeira, é armazenada a quantidade de
        // linhas modificadas na tabela. Na segunda, um array com os elementos modificados.
        return user[1][0]; // Retorna apenas o primeiro elemento modificado.
    } catch (error) {
        throw error;
    }
};

const remove = async id => {
    try {
        const user = await User.destroy({
            where: {
                id: id
            },
            returning: true
        });

        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
    findById,
    findByEmail,
    save,
    update,
    remove
};
