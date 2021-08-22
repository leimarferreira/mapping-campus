const { Class } = require("../../models/");

const getAll = async () => {
    try {
        const classes = await Class.findAll();
        return classes;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const _class = Class.findOne({
            where: {
                id: id
            }
        });

        return _class;
    } catch (error) {
        throw error;
    }
};

const save = async event => {
    try {
        const _class = Class.build({
            subject: event.subject,
            subjectCode: event.subjectCode,
            course: event.course,
            classCode: event.classCode,
            professorName: event.professorName,
            professorEmail: event.professorEmail,
            additionalInfo: event.additionalInfo
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
        const _class = await Class.destroy({
            where: {
                id: id
            }
        });

        return _class;
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
