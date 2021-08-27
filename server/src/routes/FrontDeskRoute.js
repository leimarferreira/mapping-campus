const express = require("express");
const router = express.Router();
const frontDesk = require("../controllers/FrontDeskController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", frontDesk.getAll);
router.get("/:id(\\d+)", frontDesk.getById);
router.post("/", requireLogin, frontDesk.save);
router.put("/:id(\\d+)", requireLogin, frontDesk.update);
router.delete("/:id(\\d+)", requireLogin, frontDesk.remove);

module.exports = router;
