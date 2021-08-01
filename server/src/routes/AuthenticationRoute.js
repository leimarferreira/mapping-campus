const express = require("express");
const router = express.Router();

const authenticationController = require("../controllers/AuthenticationController");

router.post("/", authenticationController.authenticate);

module.exports = router;
