const SecretaryRepository = require("../persistence/repositories/SecretaryRepository");

const save = async event => {
    return await SecretaryRepository.save(event);
};

module.exports = {
    save
};
