const userRepository = require("../persistence/repositories/UserRepository");

const validateCredentials = async (email, password) => {
    const user = await userRepository.findByEmail(email);

    if (!user || user.password != password) {
        return null;
    }

    return user;
};

module.exports = {
    validateCredentials
};
