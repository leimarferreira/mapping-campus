const TreasuryRepository = require("../persistence/repositories/TreasuryRepository");

const save = async event => {
    return await TreasuryRepository.save(event);
};

module.exports = {
    save
};
