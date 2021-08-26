const schoolBoardService = require("../services/SchoolBoardService");
const eventService = require("../services/EventService");

const getAll = async (req, res) => {
    try {
        const schoolBoardInfos = await schoolBoardService.getAll();
        
        if (schoolBoardInfos.length > 0) {
            res.status(200).json(schoolBoardInfos);
        } else {
            res.status(204).end()
        }
    } catch (error) {
        res.status(400).end()
    }
};

const getById = async (req, res) => {
    try {
        const schoolBoardInfo = await schoolBoardService.findById(req.params.id);
        if (schoolBoardInfo) {
            res.status(200).json(schoolBoardInfo);
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
        const schoolBoardInfo = await schoolBoardService.save(req.body);
        
        res.status(201).json(schoolBoardInfo);
    } catch (error) {
        res.status(400).end();
    }
};

const update = async (req, res) => {
    try {
        const schoolBoardInfo = await schoolBoardService.update(req.params.id, req.body);
        

        if (schoolBoardInfo) {
            await eventService.update(schoolBoardInfo.eventId, req.body);
            res.status(200).json(schoolBoardInfo);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const remove = async (req, res) => {
    try {
        const schoolBoardInfo = await schoolBoardService.remove(req.params.id);

        if (schoolBoardInfo) {
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
