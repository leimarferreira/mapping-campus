const userService = require("../services/UserService");
const User = require("../models/User");

const get = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getLimited = async (req, res) => {
    let users;
    const limit = req.params.limit;
        users = await userService.getLimited(limit);
}

const getById = async (req, res) => {
    try {
        const user = await userService.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getByEmail = async (req, res) => {
    try {
        const user = await userService.findByEmail(req.params.email);
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
}

const post = async (req, res) => {
    let user = new User(
        req.body.name,
        req.body.number,
        req.body.email,
        req.body.password
    );

    try {
        user = await userService.save(user);
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {
    get,
    getById,
    getByEmail,
    post
};
