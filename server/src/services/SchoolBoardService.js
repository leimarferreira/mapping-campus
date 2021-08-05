const SchoolBoardRepository = require("../persistence/repositories/SchoolBoardRepository");

const save = async event => {
    return await SchoolBoardRepository.save(event);
};

module.exports = {
    save
};
