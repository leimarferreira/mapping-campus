const express = require("express");
const router = express.Router();
const frontDeskController = require("../controllers/FrontDeskController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", frontDeskController.getAll);
router.get("/:id(\\d+)", frontDeskController.getById);
router.post("/", requireLogin, frontDeskController.save);
router.put("/:id(\\d+)", requireLogin, frontDeskController.update);
router.delete("/:id(\\d+)", requireLogin, frontDeskController.remove);

module.exports = router;
