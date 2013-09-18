/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("strings");
var textString = "text";
console.log(textString);
//Converting a string to uppercase
textString = textString.toUpperCase();
console.log(textString);
//We can retrieve a character at a given index in our string like this
console.log(textString[0]);
var lazyCat = "    The cat sat on the mat.       ";
console.log(lazyCat);
// Removing whitespace from the begining and end of text cn be done with trim
lazyCat = lazyCat.trim();
console.log(lazyCat);
// Retrieve a strings length
console.log(lazyCat.length);
// substr(start index, number of characters)
console.log(lazyCat.substr(4, 3));
// substring(start index, end index)
console.log(lazyCat.substring(4, 7));
// indexOf returns the first index of the given text
// indexOf(text to search for, start index -optional)
console.log(lazyCat.indexOf("z", 6));