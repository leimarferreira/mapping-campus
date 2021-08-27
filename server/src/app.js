require("dotenv").config();
const express = require('express');
const cors = require("cors");
const session = require("express-session");

const placesRoute = require("./routes/PlacesRoute");
const eventsRoute = require("./routes/EventsRoute");
const usersRoute = require("./routes/UsersRoute");
const classesRoute = require("./routes/ClassesRoute");
const coordinationsRoute = require("./routes/CoordinationsRoute");
const frontDeskRoute = require("./routes/FrontDeskRoute");
const professorRoomRoute = require("./routes/ProfessorRoomRoute");
const secretariatRoute = require("./routes/SecretariatRoute");
const schoolBoardRoute = require("./routes/SchoolBoardRoute");
const treasuryRoute = require("./routes/TreasuryRoute");
const authenticationRoute = require("./routes/AuthenticationRoute");

const app = express();

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false
}));

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.use("/places", placesRoute);
app.use("/events", eventsRoute);
app.use("/users", usersRoute);
app.use("/authentication", authenticationRoute);
app.use("/classes", classesRoute);
app.use("/coordinations", coordinationsRoute);
app.use("/frontdesk", frontDeskRoute);
app.use("/professorroom", professorRoomRoute);
app.use("/secretariat", secretariatRoute);
app.use("/schoolboard", schoolBoardRoute);
app.use("/treasury", treasuryRoute);

module.exports = app;
