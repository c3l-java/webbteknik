/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("functions");
var add = function (a, b) {
    "use strict";
    return a + b;
};
var minus = function (a, b) {
    "use strict";
    return a - b;
};
var calculatePlus1 = function (a, b, func) {
    "use strict";
    return func(a, b) + 1;
};