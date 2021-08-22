const { FrontDesk } = require("../../models/");

const getAll = async () => {
    try {
        const frontDeskInfos = await FrontDesk.findAll();
        return frontDeskInfos;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const frontDeskInfo = FrontDesk.findOne({
            where: {
                id: id
            }
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
            additionalInfo: event.additionalInfo
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
                id: id
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
        const frontDeskInfo = await FrontDesk.destroy({
            where: {
                id: id
            }
        });

        return frontDeskInfo;
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
