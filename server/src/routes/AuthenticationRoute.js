const express = require("express");
const router = express.Router();

const authenticationController = require("../controllers/AuthenticationController");

router.post("/", authenticationController.authenticate);
router.post("/logout", authenticationController.logout);

module.exports = router;
