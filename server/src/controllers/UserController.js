const userService = require("../services/UserService");

const get = async (req, res) => {
    try {
        const users = await userService.getAll();

        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(204).end();
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
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

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getByEmail = async (req, res) => {
    try {
        const user = await userService.findByEmail(req.params.email);
        
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const save = async (req, res) => {
    try {
        const user = await userService.save(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const user = await userService.update(req.params.id, req.body);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const user = await userService.remove(req.params.id);

        if (user) {
            res.status(200).end();
        } else {
            res.status(404).end()
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    get,
    getById,
    getByEmail,
    save,
    update,
    remove
};
