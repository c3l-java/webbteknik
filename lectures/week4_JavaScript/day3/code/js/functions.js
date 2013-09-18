/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("functions");
// The standard function definition
var add = function (a, b) {
    "use strict";
    var result = a + b;
    return result;
};
var minus = function () {
    "use strict";
    console.log(arguments);
    var i,
        result = 0;
    for (i = 0; i < arguments.length; i = i + 1) {
        result = result - arguments[i];
    }
    return result;
};
var calculatePlusOne = function (a, b, func) {
    "use strict";
    return func(a, b) + 1;
};
console.log(minus(1, 2));