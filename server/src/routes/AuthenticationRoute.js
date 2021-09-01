const express = require("express");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();

const authenticationController = require("../controllers/AuthenticationController");

router.post("/", authenticationController.authenticate);
router.get("/logout", authenticationController.logout);
router.get("/isloggedin", requireLogin, authenticationController.isLoggedIn);

module.exports = router;
