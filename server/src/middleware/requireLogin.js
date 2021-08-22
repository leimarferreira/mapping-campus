const authenticationService = require("../services/AuthenticationService");

const requireLogin = async (req, res, next) => {
    try {
        if (req.session && req.session.user) {
            const user = await authenticationService.validateCredentials(
                req.session.user.email,
                req.session.user.password
            );

            if (user) {
                next();
            } else {
                res.status(403).end();
            }
        }
    } catch (error) {
        res.status(400).end();
    }
};

module.exports = requireLogin;
