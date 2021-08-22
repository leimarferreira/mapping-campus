const Place = require("../models/Place");
const placeService = require("../services/PlaceService");

const get = async (req, res) => {
    let places;

    if (req.query.sectorId) {
        places = await placeService.findBySectorId(req.query.sectorId);
    } else {
        places = await placeService.getAll();
    }

    const status = places && places.length > 0 ? 200 : 204;

    res.status(status).json(places);
};

const getLimited = async (req, res) => {
    let places;
    const limit = req.params.limit;

    if (req.query.sectorId) {
        places = await placeService.findBySectorId(req.query.sectorId);
    } else {
        places = await placeService.getLimited(limit);
    }
}


const getById = async (req, res) => {
    const id = req.params.id;

    if (id < 1) {
        res.status(400).end();
    }

    const place = await placeService.findById(id);
    const status = place ? 200 : 404;
    res.status(status).json(place);
};

const post = async (req, res) => {
    let place = new Place(
        req.body.name,
        req.body.sectorId
    );

    try {
        place = await placeService.save(place);
        res.status(201).json(place);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const put = async (req, res) => {
    const id = req.params.id;

    if (id < 1) {
        res.status(400).end();
    }

    let place = new Place(
        req.body.name,
        req.body.sectorId
    );

    try {
        place = await placeService.update(id, place);
        res.status(200).json(place);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    const id = req.params.id;

    try {
        const place = await placeService.remove(id);
        res.status(200).json(place);
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
