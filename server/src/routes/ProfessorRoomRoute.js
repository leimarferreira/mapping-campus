const express = require("express");
const router = express.Router();
const professorRoomController = require("../controllers/ProfessorRoomController");
const requireLogin = require("../middleware/requireLogin");

router.get("/", professorRoomController.getAll);
router.get("/:id(\\d+)", professorRoomController.getById);
router.post("/", requireLogin, professorRoomController.save);
router.put("/:id(\\d+)", requireLogin, professorRoomController.update);
router.delete("/:id(\\d+)", requireLogin, professorRoomController.remove);

module.exports = router;