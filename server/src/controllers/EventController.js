const Event = require("../models/Event");
const eventService = require("../services/EventService");
const classService = require("../services/ClassService");
const coordinationService = require("../services/CoordinationService");
const frontdeskService = require("../services/FrontDeskService");
const schoolboardService = require("../services/SchoolBoardService");
const treasuryService = require("../services/TreasuryService");
const secretaryService = require("../services/SecretaryService");
const professorRoomService = require("../services/ProfessorRoomService");

const eventTypeServices = {
    "aula": classService,
    "coordenacao": coordinationService, 
    "diretoria":  schoolboardService, 
    "recepcao": frontdeskService,
    "tesouraria": treasuryService,
    "secretaria": secretaryService,
    "salaProfessor": professorRoomService
}; 


const get = async (req, res) => {
    let events;

    if (req.query.placeId) {
        events = await eventService.findByPlaceId(req.query.placeId);
    } else {
        events = await eventService.getAll();
    }

    const status = events && events.length > 0 ? 200 : 204;

    res.status(status).json(events);
};

const getById = async (req, res) => {
    let id = req.params.id;

    if (id < 1) {
        res.status(400).end();
    }

    const { type, eventId } = await eventService.findById(id);
    const event = await eventTypeServices[type].findById(eventId);
    const status = event ? 200 : 404;
    res.status(status).json(event);
};

const post = async (req, res) => {
    const type = req.body.type;

    try {
        const eventId = (await eventTypeServices[type].save(req.body)).id;
        await eventService.save(Object.assign({ eventId }, req.body));
        res.status(200).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const put = async (req, res) => {
    const id = req.params.id;

    const event = new Event(
        req.body.name,
        req.body.type
    );

    try {
        await eventService.update(id, event);
        res.status(200).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    const id = req.params.id;

    try {
        await eventService.remove(id);
        res.status(200).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    get,
    getById,
    post,
    put,
    remove
};
