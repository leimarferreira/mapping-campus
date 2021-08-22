const Place = require("../models/Place");
const placeService = require("../services/PlaceService");

const get = async (req, res) => {
    try {
        let places;

        if (req.query.sectorId) {
            places = await placeService.findBySectorId(req.query.sectorId);
        } else {
            places = await placeService.getAll();
        }

        const status = places && places.length > 0 ? 200 : 204;

        res.status(status).json(places);
    } catch (error) {
        res.status(500).end();
    }

};

const getById = async (req, res) => {
    try {
        const id = req.params.id;

        const place = await placeService.findById(id);

        if (place) {
            res.status(200).json(place);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(500).end();
    }

};

const post = async (req, res) => {
    try {
        const place = await placeService.save(req.body);
        res.status(201).json(place);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const put = async (req, res) => {
    const id = req.params.id;

    try {
        const place = await placeService.update(id, req.body);

        if (place) {
            res.status(200).json(place);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    const id = req.params.id;

    try {
        const place = await placeService.remove(id);

        if (place) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
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
