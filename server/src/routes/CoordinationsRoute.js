const express = require("express");
const router = express.Router();
const coordinationsController = require("../controllers/CoordinationController");

router.get("/", coordinationsController.getAll);
router.get("/:id(\\d+)", coordinationsController.getById);
router.post("/", coordinationsController.save);
router.put("/:id(\\d+)", coordinationsController.update);
router.delete("/:id(\\d+)", coordinationsController.remove);

module.exports = router;
