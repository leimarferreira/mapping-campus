const professorRoomService = require("../services/ProfessorRoomService");
const eventService = require("../services/EventService");

const getAll = async (req, res) => {
    try {
        const professorRoomInfos = await professorRoomService.getAll();
        
        if (professorRoomInfos.length > 0) {
            res.status(200).json(professorRoomInfos);
        } else {
            res.status(204).end()
        }
    } catch (error) {
        res.status(400).end()
    }
};

const getById = async (req, res) => {
    try {
        const professorRoomInfo = await professorRoomService.findById(req.params.id);
        if (professorRoomInfo) {
            res.status(200).json(professorRoomInfo);
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
        const professorRoomInfo = await professorRoomService.save(req.body);
        
        res.status(201).json(professorRoomInfo);
    } catch (error) {
        res.status(400).end();
    }
};

const update = async (req, res) => {
    try {
        const professorRoomInfo = await professorRoomService.update(req.params.id, req.body);
        

        if (professorRoomInfo) {
            await eventService.update(professorRoomInfo.eventId, req.body);
            res.status(200).json(professorRoomInfo);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const remove = async (req, res) => {
    try {
        const professorRoomInfo = await professorRoomService.remove(req.params.id);

        if (professorRoomInfo) {
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
