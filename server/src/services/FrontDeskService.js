const FrontDeskRepository = require("../persistence/repositories/FrontDeskRepository");

const save = async event => {
    return await FrontDeskRepository.save(event);
};

module.exports = {
    save
};
