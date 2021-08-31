const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, `${req.body.filename}.png`);
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/", upload.single("map"), (req, res) => {
    res.status(200).end();
});

router.use("/", express.static("uploads"));

module.exports = router;
