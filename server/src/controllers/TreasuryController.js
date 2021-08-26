const treasuryService = require("../services/TreasuryService");
const eventService = require("../services/EventService");

const getAll = async (req, res) => {
    try {
        const treasuryInfos = await treasuryService.getAll();
        
        if (treasuryInfos.length > 0) {
            res.status(200).json(treasuryInfos);
        } else {
            res.status(204).end()
        }
    } catch (error) {
        res.status(400).end()
    }
};

const getById = async (req, res) => {
    try {
        const treasuryInfo = await treasuryService.findById(req.params.id);
        if (treasuryInfo) {
            res.status(200).json(treasuryInfo);
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
        const treasuryInfo = await treasuryService.save(req.body);
        
        res.status(201).json(treasuryInfo);
    } catch (error) {
        res.status(400).end();
    }
};

const update = async (req, res) => {
    try {
        const treasuryInfo = await treasuryService.update(req.params.id, req.body);
        

        if (treasuryInfo) {
            await eventService.update(treasuryInfo.eventId, req.body);
            res.status(200).json(treasuryInfo);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(400).end();
    }
};

const remove = async (req, res) => {
    try {
        const treasuryInfo = await treasuryService.remove(req.params.id);

        if (treasuryInfo) {
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
