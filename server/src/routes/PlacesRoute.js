const express = require("express");
const placeController = require("../controllers/PlaceController");

const router = express.Router();

router.get("/", placeController.get);
router.get("/:id(\\d+)", placeController.getById);
router.post("/", placeController.post);
router.put("/:id(\\d+)", placeController.put);
router.delete("/:id(\\d+)", placeController.remove);

module.exports = router;
