const secretariatService = require("../services/SecretariatService");
const eventService = require("../services/EventService");

const getAll = async (req, res) => {
    try {
        const secretariatInfos = await secretariatService.getAll();
        
        if (secretariatInfos.length > 0) {
            res.status(200).json(secretariatInfos);
        } else {
            res.status(204).end()
        }
    } catch (error) {
        res.status(400).end()
    }
};

const getById = async (req, res) => {
    try {
        const secretariatInfo = await secretariatService.findById(req.params.id);
        if (secretariatInfo) {
            res.status(200).json(secretariatInfo);
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
        const secretariatInfo = await secretariatService.save(req.body);
        
        res.status(201).json(secretariatInfo);
    } catch (error) {
        res.status(400).end();
    }
};

const update = async (req, res) => {
    try {
        const secretariatInfo = await secretariatService.update(req.params.id, req.body);
        

        if (secretariatInfo) {
            await eventService.update(secretariatInfo.eventId, req.body);
            res.status(200).json(secretariatInfo);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const remove = async (req, res) => {
    try {
        const secretariatInfo = await secretariatService.remove(req.params.id);

        if (secretariatInfo) {
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
