const express = require("express");
const router = express.Router();
const classController = require("../controllers/ClassController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", classController.getAll);
router.get("/:id(\\d+)", classController.getById);
router.post("/", requireLogin, classController.save);
router.put("/:id(\\d+)", requireLogin, classController.update);
router.delete("/:id(\\d+)", requireLogin, classController.remove);

module.exports = router;
