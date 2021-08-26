const express = require("express");
const router = express.Router();
const eventController = require("../controllers/EventController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", eventController.get);
router.get("/:id(\\d+)", eventController.getById);
router.get("/place/:id(\\d+)", eventController.getByPlaceId);
router.post("/", requireLogin, eventController.post);
router.put("/:id(\\d+)", requireLogin, eventController.put);
router.delete("/:id(\\d+)", requireLogin, eventController.remove);

module.exports = router;
