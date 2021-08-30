const express = require("express");
const router = express.Router();
const coordinationsController = require("../controllers/CoordinationController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", coordinationsController.getAll);
router.get("/:id(\\d+)", coordinationsController.getById);
router.post("/", requireLogin, coordinationsController.save);
router.put("/:id(\\d+)", requireLogin, coordinationsController.update);
router.delete("/:id(\\d+)", requireLogin, coordinationsController.remove);

module.exports = router;
