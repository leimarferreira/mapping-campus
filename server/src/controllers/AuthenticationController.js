const authenticationService = require("../services/AuthenticationService");

const authenticate = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await authenticationService.validateCredentials(email, password);
        res.json(user);
    } catch (error) {
        res.json(null);
    }
}

module.exports = {
    authenticate
};
