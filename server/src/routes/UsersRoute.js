const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/", userController.get);
router.get("/:id(\\d+)", userController.getById);
router.get("/:email", userController.getByEmail);
router.post("/", userController.post);

module.exports = router;
