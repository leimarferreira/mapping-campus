const CoordinationRepository = require("../persistence/repositories/CoordinationRepository");

const save = async event => {
    return await CoordinationRepository.save(event);
};

module.exports = {
    save
};
