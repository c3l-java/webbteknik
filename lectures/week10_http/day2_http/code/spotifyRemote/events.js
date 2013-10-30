/*global spotify:false, console: false, require: false, module: false, exports: false */
var spotify = require('spotify-node-applescript'),
    express = require("express"),
    stateNr = 1,
    events = require("events"),
    eventHolder = new events.EventEmitter,
    app = express();
var updateState = function () {
    stateNr += 1;
    eventHolder.emit("stateChanged");
};
app.use(express.json());
app.post("/loadTrack", function (req, res) {
    spotify.playTrack(req.body.track, function () {
        console.log("loaded");
        spotify.pause(function () {
            updateState();
            res.send(200, "loaded");
        });
    });
});
app.post("/play", function (req, res) {
    spotify.play(function () {
        updateState();
        res.send(200, "playing");
    });
});
app.post("/pause", function (req, res) {
    spotify.pause(function () {
        console.log("paused");
        updateState();
        res.send(200, "paused");
    });
});
app.get("/status", function (req, res) {
    "use strict";
    var lastRead = req.query.lastRead;
    if (lastRead !== stateNr) {
        spotify.getState(function (err, state) {
            state.stateNr = stateNr;
            updateState();
            res.json(state);
        });
    } else {
        eventHolder.on("stateChanged", function () {
            spotify.getState(function (err, state) {
                state.stateNr = stateNr;
                updateState();
                res.json(state);
            });
        });
    }
});
app.listen(8011);