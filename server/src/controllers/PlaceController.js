const placeService = require("../services/PlaceService");

const get = async (req, res) => {
    try {
        let places;

        if (req.query.sectorId) {
            places = await placeService.findBySectorId(req.query.sectorId);
        } else {
            places = await placeService.getAll();
        }

        if (req.query.limit) {
            places = places.slice(0, req.query.limit);
        }

        if (places && places.length > 0) {
            res.status(200).json(places);
        } else {
            res.status(204).end();
        }
    } catch (error) {
        res.status(500).end();
    }

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

const getByName = async (req, res) => {
    try {
        const name = req.params.name;

        let places = await placeService.findByName(name);

        if (req.query.limit) {
            places = places.slice(0, req.query.limit);
        }

        if (req.query.sectorId) {
            places = places.filter(place => place.sectorId == req.query.sectorId);
        }

        if (places && places.length > 0) {
            res.status(200).json(places);
        } else {
            res.status(204).end();
        }
    } catch (error) {
        res.status(400).end();
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
    getByName,
    post,
    put,
    remove
};
