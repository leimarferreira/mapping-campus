const User = require("./User");
const Place = require("./Place");
const Event = require("./Event");
const Class = require("./Class");
const Coordination = require("./Coordination");
const FrontDesk = require("./FrontDesk");
const SchoolBoard = require("./SchoolBoard");
const Secretariat = require("./Secretariat");
const Treasury = require("./Treasury");
const ProfessorRoom = require("./ProfessorRoom");

Place.hasMany(Event);
Event.belongsTo(Place);
Event.hasOne(Class, {
    onDelete: 'CASCADE'
});
Class.belongsTo(Event, {
    onDelete: 'CASCADE'
});
Event.hasOne(Coordination, {
    onDelete: 'CASCADE'
})
Coordination.belongsTo(Event, {
    onDelete: 'CASCADE'
});
Event.hasOne(FrontDesk, {
    onDelete: 'CASCADE'
});
FrontDesk.belongsTo(Event, {
    onDelete: 'CASCADE'
});
Event.hasOne(SchoolBoard, {
    onDelete: 'CASCADE'
});
SchoolBoard.belongsTo(Event, {
    onDelete: 'CASCADE'
});
Event.hasOne(Secretariat, {
    onDelete: 'CASCADE'
});
Secretariat.belongsTo(Event, {
    onDelete: 'CASCADE'
});
Event.hasOne(Treasury, {
    onDelete: 'CASCADE'
});
Treasury.belongsTo(Event, {
    onDelete: 'CASCADE'
});
Event.hasOne(ProfessorRoom, {
    onDelete: 'CASCADE'
});
ProfessorRoom.belongsTo(Event, {
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Place,
    Event,
    Class,
    Coordination,
    FrontDesk,
    SchoolBoard,
    Secretariat,
    Treasury,
    ProfessorRoom
};
