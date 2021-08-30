const express = require("express");
const router = express.Router();
const secretariatController = require("../controllers/SecretariatController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", secretariatController.getAll);
router.get("/:id(\\d+)", secretariatController.getById);
router.post("/", requireLogin, secretariatController.save);
router.put("/:id(\\d+)", requireLogin, secretariatController.update);
router.delete("/:id(\\d+)", requireLogin, secretariatController.remove);

module.exports = router;