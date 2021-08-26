const express = require("express");
const router = express.Router();
const schoolBoardController = require("../controllers/SchoolBoardController");

router.get("/", schoolBoardController.getAll);
router.get("/:id(\\d+)", schoolBoardController.getById);
router.post("/", schoolBoardController.save);
router.put("/:id(\\d+)", schoolBoardController.update);
router.delete("/:id(\\d+)", schoolBoardController.remove);

module.exports = router;