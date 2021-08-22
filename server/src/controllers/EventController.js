const eventService = require("../services/EventService");
const classService = require("../services/ClassService");
const coordinationService = require("../services/CoordinationService");
const frontdeskService = require("../services/FrontDeskService");
const schoolboardService = require("../services/SchoolBoardService");
const treasuryService = require("../services/TreasuryService");
const secretariatService = require("../services/SecretariatService");

const eventTypeServices = {
    "aula": classService,
    "coordenacao": coordinationService,
    "diretoria": schoolboardService,
    "recepcao": frontdeskService,
    "tesouraria": treasuryService,
    "secretaria": secretariatService
};


const get = async (req, res) => {
    try {
        let events;

        if (req.query.placeId) {
            events = await eventService.findByPlaceId(req.query.placeId);
        } else {
            events = await eventService.getAll();
        }

        if (events.length > 0) {
            res.status(200).json(events);
        } else {
            res.status(204).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const getById = async (req, res) => {
    try {
        let id = req.params.id;

        const { type, eventId } = await eventService.findById(id);
        const event = await eventTypeServices[type].findById(eventId);
        
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }

};

const post = async (req, res) => {
    const type = req.body.type;

    try {
        //const eventId = (await eventTypeServices[type].save(req.body)).id;
        const event = await eventService.save(/* Object.assign({ eventId },  */req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).end();
    }
};

const put = async (req, res) => {
    const id = req.params.id;

    try {
        const event = await eventService.update(id, req.body);

        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).end();
        }
        
    } catch (error) {
        res.status(400).end();
    }
};

const remove = async (req, res) => {
    const id = req.params.id;

    try {
        const event = await eventService.remove(id);

        if (event) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

module.exports = {
    get,
    getById,
    post,
    put,
    remove
};
