const { Class, Event } = require("../../models/");

const getAll = async () => {
    try {
        const classes = await Class.findAll({
            include: { all: true }
        });
        return classes;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const _class = Class.findOne({
            where: {
                eventId: id
            },
            include: { all: true }
        });

        return _class;
    } catch (error) {
        throw error;
    }
};

const save = async record => {
    try {
        const _class = Class.build({
            subject: record.subject,
            subjectCode: record.subjectCode,
            course: record.course,
            classCode: record.classCode,
            professorName: record.professorName,
            professorEmail: record.professorEmail,
            additionalInfo: record.additionalInfo,
            eventId: record.eventId
        });

        await _class.save();
        return _class;
    } catch (error) {
        throw error;
    }
};

const update = async (id, event) => {
    try {
        const _class = await Class.update({
            subject: event.subject,
            subjectCode: event.subjectCode,
            course: event.course,
            classCode: event.classCode,
            professorName: event.professorName,
            professorEmail: event.professorEmail,
            additionalInfo: event.additionalInfo
        }, {
            where: {
                id: id
            },
            returning: true
        });

        return _class[1][0];
    } catch (error) {
        throw error;
    }
};

const remove = async id => {
    try {
        const _class = await findById(id);
        return await Event.destroy({
            where: {
                id: _class.eventId
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
