/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// When you click on the button alert the value of all the form elements.
window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var button = document.simpleForm.myButton,
        textBox = document.simpleForm.myTextBox,
        textArea = document.simpleForm.myTextArea,
        /* I cheated and used a CSS selector :)*/
        sex = document.querySelector("input[name='sex']:checked"),
        bike = document.simpleForm.bike,
        car = document.simpleForm.car,
        carBrand = document.simpleForm.carBrand;
    button.addEventListener("click", function () {
        var bigString;
        bigString = "TextBox : " + textBox.value + "\n";
        bigString += "TextArea : " + textArea.value + "\n";
        bigString += "Sex : " + sex.value + "\n";
        if (bike.checked) {
            bigString += "Bike : " + bike.value + "\n";
        }
        if (car.checked) {
            bigString += "Car : " + car.value + "\n";
        }
        bigString += "Car brand : " + carBrand.value;
        alert(bigString);
    }, false);
});