const { FrontDesk, Event } = require("../../models/");

const getAll = async () => {
    try {
        const frontDeskInfos = await FrontDesk.findAll({
            include: { all: true }
        });
        
        return frontDeskInfos;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const frontDeskInfo = FrontDesk.findOne({
            where: {
                eventId: id
            },
            include: { all: true }
        });

        return frontDeskInfo;
    } catch (error) {
        throw error;
    }
};

const save = async event => {
    try {
        const frontDesk = FrontDesk.build({
            responsibleName: event.responsibleName,
            responsibleEmail: event.responsibleEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo,
            eventId: event.eventId
        });

        await frontDesk.save();
        return frontDesk;
    } catch (error) {
        throw error;
    }
};

const update = async (id, event) => {
    try {
        const frontDeskInfo = await FrontDesk.update({
            responsibleName: event.responsibleName,
            responsibleEmail: event.responsibleEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo
        }, {
            where: {
                eventId: id
            },
            returning: true
        });

        return frontDeskInfo[1][0];
    } catch (error) {
        throw error;
    }
}

const remove = async id => {
    try {
        const frontDesk = await findById(id);
        return await Event.destroy({
            where: {
                id: frontDesk.eventId
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
