/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("object literals");
var volvo = {};
volvo.regnumber = "RDA 388";
volvo.color = "red";
volvo.wheels = {};
volvo.wheels.number = 4;
volvo.wheels.rims = {};
volvo.wheels.rims.width = '16"';
var saab = {
    "regnumber": "ZBA 321",
    "color": "blue",
    "wheels": {
        "number": 3,
        "rims": {
            "width": '92"'
        }
    }
};
console.log("-------------------");
var property;
for (property in saab) {
    if (saab.hasOwnProperty(property)) {
        console.log(property);
        console.log(saab[property]);
    }
}