const { Coordination } = require("../../models/");

const getAll = async () => {
    try {
        const coordinations = await Coordination.findAll();
        return coordinations;
    } catch (error) {
        throw error;
    }
};

const findById = async id => {
    try {
        const coordination = Coordination.findOne({
            where: {
                id: id
            }
        });

        return coordination;
    } catch (error) {
        throw error;
    }
}

const save = async event => {
    try {
        const coordination = Coordination.build({
            coordinatorName: event.coordinatorName,
            coordinatorEmail: event.coordinatorEmail,
            viceCoordinatorName: event.viceCoordinatorName,
            viceCoordinatorEmail: event.viceCoordinatorEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo
        });

        await coordination.save();

        return coordination;
    } catch (error) {
        throw error;
    }
};

const update = async (id, event) => {
    try {
        const coordination = await Coordination.update({
            coordinatorName: event.coordinatorName,
            coordinatorEmail: event.coordinatorEmail,
            viceCoordinatorName: event.viceCoordinatorName,
            viceCoordinatorEmail: event.viceCoordinatorEmail,
            openingTime: event.openingTime,
            closingTime: event.closingTime,
            additionalInfo: event.additionalInfo
        }, {
            where: {
                id: id
            },
            returning: true
        });

        return coordination[1][0];
    } catch (error) {
        throw error;
    }
}

const remove = async id => {
    try {
        const coordination = await Coordination.destroy({
            where: {
                id: id
            }
        });

        return coordination;
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
