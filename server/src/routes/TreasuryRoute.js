const express = require("express");
const router = express.Router();
const treasuryController = require("../controllers/TreasuryController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", treasuryController.getAll);
router.get("/:id(\\d+)", treasuryController.getById);
router.post("/", requireLogin, treasuryController.save);
router.put("/:id(\\d+)", requireLogin, treasuryController.update);
router.delete("/:id(\\d+)", requireLogin, treasuryController.remove);

module.exports = router;
