const { Secretariat, Event } = require("../../models");

const getAll = async () => {
    try {
        const secretariatInfos = await Secretariat.findAll({
            include: { all: true }
        });
        return secretariatInfos;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const secretariatInfo = Secretariat.findOne({
            where: {
                eventId: id
            },
            include: { all: true }
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
            additionalInfo: event.additionalInfo,
            eventId: event.eventId
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
        const secretariat = await findById(id);
        return await Event.destroy({
            where: {
                id: secretariat.eventId
            }
        });
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
