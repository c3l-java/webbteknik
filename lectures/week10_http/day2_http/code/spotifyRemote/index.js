/*global spotify:false, console: false, require: false, module: false, exports: false */
var spotify = require('spotify-node-applescript'),
    express = require("express"),
    app = express();
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
    spotify.getState(function (err, state) {
        res.json(state);
    });
});
app.listen(8011);