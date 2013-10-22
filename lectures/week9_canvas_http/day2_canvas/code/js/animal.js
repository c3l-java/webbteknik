/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var createAnimal = function () {
    "use strict";
    var canvas = document.createElement("canvas"),
        context = canvas.getContext("2d"),
        spriteImage = document.createElement("img"),
        direction = "e",
        loaded = false,
        animationFrame = 0;
    canvas.width = 32;
    canvas.height = 32;
    spriteImage.src = "sprites/galleryanimals.png";
    spriteImage.onload = function () {
        loaded = true;
    };

    function animate() {
        var yPosition = 0,
            tempFrame;
        if (loaded) {
            switch (direction) {
            case "n":
                yPosition = -96;
                break;
            case "s":
                yPosition = 0;
                break;
            case "e":
                yPosition = -64;
                break;
            case "w":
                yPosition = -32;
                break;
            }
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (animationFrame === 3) {
                animationFrame = 0;
            } else {
                animationFrame = animationFrame + 1;
            }
            tempFrame = (animationFrame === 3) ? 1 : animationFrame;
            context.drawImage(spriteImage, tempFrame * -32, yPosition);
        }
        setTimeout(animate, 100);
    }
    animate();
    document.addEventListener("keydown", function (e) {
        switch (e.keyIdentifier) {
        case "Right":
            direction = "e";
            break;
        case "Left":
            direction = "w";
            break;
        case "Up":
            direction = "n";
            break;
        case "Down":
            direction = "s";
            break;
        }
    });
    return {
        canvas: canvas,
        getDirection: function () {
            return direction;
        }
    };
};