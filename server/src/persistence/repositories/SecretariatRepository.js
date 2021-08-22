const { Secretariat } = require("../../models");

const getAll = async () => {
    try {
        const secretariatInfos = await Secretariat.findAll();
        return secretariatInfos;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const secretariatInfo = Secretariat.findOne({
            where: {
                id: id
            }
        });

        return secretariatInfo;
    } catch (error) {
        throw error;
    }
};

const save = async event => {
    try {
        const secreatiatInfo = Secretariat.build({
            responsibleName: event.responsibleName,
            responsibleEmail: event.responsibleEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo
        });

        await secreatiatInfo.save();
        return secreatiatInfo;
    } catch (error) {
        throw error;
    }
};

const update = async (id, event) => {
    try {
        const secreatiatInfo = await Secretariat.update({
            responsibleName: event.responsibleName,
            responsibleEmail: event.responsibleEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo
        }, {
            where: {
                id: id
            }
        });

        return secreatiatInfo[1][0];
    } catch (error) {
        throw error;
    }
};

const remove = async id => {
    try {
        const secretariatInfo = await Secretariat.destroy({
            where: {
                id: id
            }
        });

        return secretariatInfo;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
    findById,
    save,
    update,
    remove
};
