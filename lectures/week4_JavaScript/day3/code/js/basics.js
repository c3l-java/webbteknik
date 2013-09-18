/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var a = 10,
    b = 4,
    i = 0,
    property;
if (a > b) {
    console.log(true);
} else {
    console.log(false);
}
// while runs if statement is true this may mean it never runs
while (i < 3) {
    console.log(i);
    i = i + 1;
}
i = 0;
// do while always runs at least once
do {
    console.log(i);
    i = i + 1;
} while (i < 5);
for (i = 0; i < 5; i = i + 1) {
    console.log(i);
}

function afunc(val) {
    "use strict";
    switch (typeof val) {
    case "number":
        console.log("number");
        break;
    case "string":
        console.log("string");
        break;
    default:
        console.log("not string or number");
    }
}