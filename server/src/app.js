require("dotenv").config();
const express = require('express');
const cors = require("cors");
const session = require("express-session");

const placesRoute = require("./routes/PlacesRoute");
const eventsRoute = require("./routes/EventsRoute");
const usersRoute = require("./routes/UsersRoute");
const authenticationRoute = require("./routes/AuthenticationRoute");

const app = express();

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false
}));

app.use(express.json());
app.use(cors());

app.use("/places", placesRoute);
app.use("/events", eventsRoute);
app.use("/users", usersRoute);
app.use("/authentication", authenticationRoute);

module.exports = app;
