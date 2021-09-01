const authenticationService = require("../services/AuthenticationService");

const authenticate = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    try {
        const user = await authenticationService.validateCredentials(email, password);

        if (user) {
            req.session.user = user;
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (error) {
        res.status(400).end();
    }
}

const logout = (req, res) => {
    req?.session?.destroy();
    res.status(200).end();
}

const isLoggedIn = (req, res) => {
    res.status(200).end();
}

module.exports = {
    authenticate,
    logout,
    isLoggedIn
};
