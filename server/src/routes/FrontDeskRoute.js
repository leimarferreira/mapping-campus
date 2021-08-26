const express = require("express");
const router = express.Router();
const frontDesk = require("../controllers/FrontDeskController");

router.get("/", frontDesk.getAll);
router.get("/:id(\\d+)", frontDesk.getById);
router.post("/", frontDesk.save);
router.put("/:id(\\d+)", frontDesk.update);
router.delete("/:id(\\d+)", frontDesk.remove);

module.exports = router;
