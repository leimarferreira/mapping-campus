const express = require("express");
const router = express.Router();
const classController = require("../controllers/ClassController");

router.get("/", classController.getAll);
router.get("/:id(\\d+)", classController.getById);
router.post("/", classController.save);
router.put("/:id(\\d+)", classController.update);
router.delete("/:id(\\d+)", classController.remove);

module.exports = router;
