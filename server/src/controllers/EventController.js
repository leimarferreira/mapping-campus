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

        if (req.query.limit) {
            events = events.slice(0, req.query.limit);
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

const getLimited = async (req, res) => {
    let events;
    const limit = req.params.limit;

    if (req.query.placeId) {
        events = await eventService.findByPlaceId(req.query.placeId);
        events.slice(0, limit);
    } else {
        events = await eventService.getLimited(limit);
    }
}

const getById = async (req, res) => {
    try {
        let id = req.params.id;

        const event = await eventService.findById(id);
        
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }

};

const getByPlaceId = async (req, res) => {
    try {
        let id = req.params.id;

        const events = await eventService.findByPlaceId(id);

        if (req.query.limit) {
            events = events.splash(0, limit);
        }
        
        if (events) {
            res.status(200).json(events);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }

};

const getByName = async (req, res) => {
    try {
        const name = req.params.name;

        const events = await eventService.findByName(name);

        if (req.query.limit) {
            events = events.splash(0, limit);
        }

        if (events && events.length > 0) {
            res.status(200).json(events);
        } else {
            res.status(204).end();
        }
    } catch {
        res.status(400).end();
    }
}

const post = async (req, res) => {
    const type = req.body.type;

    try {
        const eventId = (await eventService.save(req.body)).id;
        req.body.eventId = eventId;
        const event = await eventTypeServices[type].save(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).end();
    }
};

const put = async (req, res) => {
    const id = req.params.id;

    try {
        const event = await eventService.update(id, req.body);
        const classes = await classService.getAll();
        
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
    getByPlaceId,
    getLimited,
    getByName,
    post,
    put,
    remove
};
