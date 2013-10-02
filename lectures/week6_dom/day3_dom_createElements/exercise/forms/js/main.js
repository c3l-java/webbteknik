/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// When you click on the button alert the value of all the form elements.
window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var button = document.simpleForm.myButton,
        textBox = document.simpleForm.myTextBox;
    button.addEventListener("click", function () {
        var bigString;
        bigString = "TextBox : " + textBox.value + "\n";
        alert(bigString);
    }, false);
});