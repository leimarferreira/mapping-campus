const { Treasury } = require("../../models");

const getAll = async () => {
    try {
        const treasuryInfos = await Treasury.findAll({
            include: { all: true }
        });
        return treasuryInfos;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const treasuryInfo = Treasury.findOne({
            where: {
                eventId: id
            },
            include: { all: true }
        });

        return treasuryInfo;
    } catch (error) {
        throw error;
    }
};

const save = async event => {
    try {
        const treasuryInfo = Treasury.build({
            responsibleName: event.responsibleName,
            responsibleEmail: event.responsibleEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo,
            eventId: event.eventId
        });

        await treasuryInfo.save();
        return treasuryInfo;
    } catch (error) {
        throw error;
    }
};

const update = async (id, event) => {
    try {
        const treasuryInfo = await Treasury.update({
            responsibleName: event.responsibleName,
            responsibleEmail: event.responsibleEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo
        }, {
            where: {
                eventId: id
            }
        });

        return treasuryInfo[1][0];
    } catch (error) {
        throw error;
    }
};

const remove = async id => {
    try {
        const treasury = await findById(id);
        return await Event.destroy({
            where: {
                id: treasury.eventId
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
