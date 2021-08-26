const classService = require("../services/ClassService");
const eventService = require("../services/EventService");

const getAll = async (req, res) => {
    try {
        const classes = await classService.getAll();
        
        if (classes.length > 0) {
            res.status(200).json(classes);
        } else {
            res.status(204).end()
        }
    } catch (error) {
        res.status(400).end()
    }
};

const getById = async (req, res) => {
    try {
        const _class = await classService.findById(req.params.id);
        if (_class) {
            res.status(200).json(_class);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const save = async (req, res) => {
    try {
        req.body.eventId = (await eventService.save(req.body)).id;
        const _class = await classService.save(req.body);
        
        res.status(201).json(_class);
    } catch (error) {
        res.status(400).end();
    }
};

const update = async (req, res) => {
    try {
        const _class = await classService.update(req.params.id, req.body);
        

        if (_class) {
            await eventService.update(_class.eventId, req.body);
            res.status(200).json(_class);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const remove = async (req, res) => {
    try {
        const _class = await classService.remove(req.params.id);

        if (_class) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
}

module.exports = {
    getAll,
    getById,
    save,
    update,
    remove
};
