const express = require("express");
const router = express.Router();
const secretariatController = require("../controllers/SecretariatController");

router.get("/", secretariatController.getAll);
router.get("/:id(\\d+)", secretariatController.getById);
router.post("/", secretariatController.save);
router.put("/:id(\\d+)", secretariatController.update);
router.delete("/:id(\\d+)", secretariatController.remove);

module.exports = router;