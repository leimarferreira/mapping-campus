const express = require("express");
const placeController = require("../controllers/PlaceController");
const requireLogin = require("../middleware/requireLogin");

const router = express.Router();

router.get("/", placeController.get);
router.get("/:id(\\d+)", placeController.getById);
router.get("/:name", placeController.getByName);
router.post("/", requireLogin, placeController.post);
router.put("/:id(\\d+)", requireLogin, placeController.put);
router.delete("/:id(\\d+)", requireLogin, placeController.remove);

module.exports = router;
