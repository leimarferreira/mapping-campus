const express = require("express");
const router = express.Router();
const requireLogin = require("../middleware/requireLogin");

const userController = require("../controllers/UserController");

router.get("/", requireLogin, userController.get);
router.get("/:id(\\d+)", requireLogin, userController.getById);
router.get("/:email", requireLogin, userController.getByEmail);
router.post("/", userController.save);
router.put("/:id(\\d+)", requireLogin, userController.update);
router.delete("/:id(\\d+)", requireLogin, userController.remove);

module.exports = router;
