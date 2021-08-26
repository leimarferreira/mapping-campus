const frontDeskService = require("../services/FrontDeskService");
const eventService = require("../services/EventService");

const getAll = async (req, res) => {
    try {
        const frontDeskInfos = await frontDeskService.getAll();
        
        if (frontDeskInfos.length > 0) {
            res.status(200).json(frontDeskInfos);
        } else {
            res.status(204).end()
        }
    } catch (error) {
        res.status(400).end()
    }
};

const getById = async (req, res) => {
    try {
        const frontDeskInfo = await frontDeskService.findById(req.params.id);
        if (frontDeskInfo) {
            res.status(200).json(frontDeskInfo);
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
        const frontDeskInfo = await frontDeskService.save(req.body);
        
        res.status(201).json(frontDeskInfo);
    } catch (error) {
        res.status(400).end();
    }
};

const update = async (req, res) => {
    try {
        const frontDeskInfo = await frontDeskService.update(req.params.id, req.body);
        

        if (frontDeskInfo) {
            await eventService.update(frontDeskInfo.eventId, req.body);
            res.status(200).json(frontDeskInfo);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const remove = async (req, res) => {
    try {
        const frontDeskInfo = await frontDeskService.remove(req.params.id);

        if (frontDeskInfo) {
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
