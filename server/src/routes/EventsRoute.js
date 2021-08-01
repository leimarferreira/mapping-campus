const express = require("express");
const router = express.Router();
const eventController = require("../controllers/EventController");

router.get("/", eventController.get);
router.get("/:id(\\d+)", eventController.getById);
router.post("/", eventController.post);
router.put("/:id(\\d+)", eventController.put);
router.delete("/:id(\\d+)", eventController.remove);

module.exports = router;
