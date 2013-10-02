/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var ul = document.querySelector("ul"),
        button = document.querySelector("#button"),
        input = document.querySelector("#itemName");
    // Listen to the click event on the span with the id of button
    button.addEventListener("click", function () {
        var li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
    });
    // when you click on it retrieve the value from the input element and 
    // add it to the unordered list as a "li" element 
}, false);