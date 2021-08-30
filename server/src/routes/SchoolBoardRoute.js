const express = require("express");
const router = express.Router();
const schoolBoardController = require("../controllers/SchoolBoardController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", schoolBoardController.getAll);
router.get("/:id(\\d+)", schoolBoardController.getById);
router.post("/", requireLogin, schoolBoardController.save);
router.put("/:id(\\d+)", requireLogin, schoolBoardController.update);
router.delete("/:id(\\d+)", requireLogin, schoolBoardController.remove);

module.exports = router;