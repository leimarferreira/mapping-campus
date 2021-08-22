const userRepository = require("../persistence/repositories/UserRepository");

const getAll = async () => {
    return await userRepository.getAll();
};

const getLimited = async limit => {
    return await userRepository.getLimited(limit);
}

const findById = async id => {
    return await userRepository.findById(id);
};

const findByEmail = async email => {
    return await userRepository.findByEmail(email);
};

const save = async user => {
    return await userRepository.save(user);
};

const update = async (id, record) => {
    return await userRepository.update(id, record);
};

const remove = async id => {
    return await userRepository.remove(id);
};

module.exports = {
    getAll,
    findById,
    findByEmail,
    save,
    update,
    remove
};
