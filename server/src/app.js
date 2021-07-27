require("dotenv").config();
const express = require('express');
const cors = require("cors");

const placeRoute = require("./routes/PlacesRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/places", placeRoute);

module.exports = app;
