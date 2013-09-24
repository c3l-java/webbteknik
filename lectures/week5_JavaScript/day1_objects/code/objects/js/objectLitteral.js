/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("objects");
var jesperCat = {
    "color": "Red",
    "age": 200,
    "favFood": "Tuna",
    "name": "Jesper",
    "makeSound": function () {
        "use strict";
        console.log("Meoow");
    },
    "weight": {
        "value": 200,
        "unit": "Tons"
    }
};
var tomCat = {};
tomCat.name = "Tom";
tomCat.color = "Black/White";
tomCat.makeSound = function () {
    "use strict";
    console.log("Core blimey guv, wud you like sum tea?");
};
var busterCat = {};
busterCat["name"] = "Buster";
busterCat["color"] = "White";
busterCat["makeSound"] = function () {
    "use strict";
    console.log("Rooarrrrrrarrara");
};
var catFactory = function (name, color, sound) {
    "use strict";
    var that = {};
    that.name = name;
    that.color = color;
    that.makeSound = function () {
        console.log(sound);
    };
    return that;
};