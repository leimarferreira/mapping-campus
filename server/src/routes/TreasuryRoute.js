const express = require("express");
const router = express.Router();
const treasuryController = require("../controllers/TreasuryController");

router.get("/", treasuryController.getAll);
router.get("/:id(\\d+)", treasuryController.getById);
router.post("/", treasuryController.save);
router.put("/:id(\\d+)", treasuryController.update);
router.delete("/:id(\\d+)", treasuryController.remove);

module.exports = router;
