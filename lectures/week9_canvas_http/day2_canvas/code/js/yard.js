/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d"),
        myDog = createAnimal();
    myDog.x = 400;
    myDog.y = 400;
    canvas.width = 800;
    canvas.height = 800;
    context.fillStyle = "yellow";
    context.fillRect(0, 0, canvas.width, canvas.height);

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(myDog.canvas, myDog.x, myDog.y);
        requestAnimationFrame(animate);
    }
    animate();

    function moveDog() {
        switch (myDog.getDirection()) {
        case "n":
            myDog.y = myDog.y - 1;
            break;
        case "s":
            myDog.y = myDog.y + 1;
            break;
        case "e":
            myDog.x = myDog.x + 1;
            break;
        case "w":
            myDog.x = myDog.x - 1;
            break;
        }
    }
    setInterval(moveDog, 10);
});