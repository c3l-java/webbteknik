/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d"),
        spriteImage = document.createElement("img");
    canvas.width = 32;
    canvas.height = 32;
    spriteImage.src = "sprites/galleryanimals.png";
    spriteImage.onload = function () {
        context.drawImage(spriteImage, -96, -32);
    };
    document.addEventListener("keydown", function (e) {
        switch (e.keyIdentifier) {
        case "Right":
            context.drawImage(spriteImage, 0, -64);
            break;
        case "Left":
            context.drawImage(spriteImage, 0, -32);
            break;
        case "Up":
            context.drawImage(spriteImage, 0, -96);
            break;
        case "Down":
            context.drawImage(spriteImage, 0, 0);
            break;
        }
    });
});