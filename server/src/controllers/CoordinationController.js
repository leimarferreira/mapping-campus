const coordinationService = require("../services/CoordinationService");
const eventService = require("../services/EventService");

const getAll = async (req, res) => {
    try {
        const coordinations = await coordinationService.getAll();
        
        if (coordinations.length > 0) {
            res.status(200).json(coordinations);
        } else {
            res.status(204).end()
        }
    } catch (error) {
        res.status(400).end()
    }
};

const getById = async (req, res) => {
    try {
        const coordination = await coordinationService.findById(req.params.id);
        if (coordination) {
            res.status(200).json(coordination);
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
        const coordination = await coordinationService.save(req.body);
        
        res.status(201).json(coordination);
    } catch (error) {
        res.status(400).end();
    }
};

const update = async (req, res) => {
    try {
        const coordination = await coordinationService.update(req.params.id, req.body);
        

        if (coordination) {
            await eventService.update(coordination.eventId, req.body);
            res.status(200).json(coordination);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const remove = async (req, res) => {
    try {
        const coordination = await coordinationService.remove(req.params.id);

        if (coordination) {
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
