const { SchoolBoard } = require("../../models");

const getAll = async () => {
    try {
        const schoolBoardInfos = await SchoolBoard.findAll();
        return schoolBoardInfos;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const schoolBoardInfo = SchoolBoard.findOne({
            where: {
                id: id
            }
        });

        return schoolBoardInfo;
    } catch (error) {
        throw error;
    }
};

const save = async event => {
    try {
        const schoolboardInfo = SchoolBoard.build({
            directorName: event.directorName,
            directorEmail: event.directorEmail,
            viceDirectorName: event.viceDirectorName,
            viceDirectorEmail: event.viceDirectorEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo,
            eventId: event.eventId
        });

        await schoolboardInfo.save();
        return schoolboardInfo;
    } catch (error) {
        throw error;
    }
};

const update = async (id, event) => {
    try {
        const schoolboardInfo = await SchoolBoard.update({
            directorName: event.directorName,
            directorEmail: event.directorEmail,
            viceDirectorName: event.viceDirectorName,
            viceDirectorEmail: event.viceDirectorEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo
        }, {
            where: {
                id: id
            },
            returning: true
        });

        return schoolboardInfo[1][0];
    } catch (error) {
        throw error;
    }
};

const remove = async id => {
    try {
        const schoolBoardInfo = await SchoolBoards.destroy({
            where: {
                id: id
            }
        });

        return schoolBoardInfo;
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
