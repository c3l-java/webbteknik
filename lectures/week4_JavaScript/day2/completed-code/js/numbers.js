/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("numbers");
// Create a decimal
var decimal = 10;
console.log(decimal);
// Create an decimal from an octal
var octal = 010;
console.log(octal);
// Create a decimal from a hexadecimal
var hex = 0xBADA55;
console.log(hex);
// * / + - %
// Try and convert string to number it won't work and we get NaN
var notANumber = Number("hello");
console.log(notANumber);
// Unfortunately NaN is of type "number"
console.log(typeof notANumber);
// To detect a NaN we use isNaN()
console.log(isNaN(notANumber));
// parseInt can also be used to retrieve an int from a string
// parseInt(string, radix 16-10-8 )
console.log(parseInt("10kg", 10));