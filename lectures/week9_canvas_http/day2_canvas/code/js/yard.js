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
            if (myDog.y > 0) {
                myDog.y = myDog.y - 1;
            }
            break;
        case "s":
            if (myDog.y < canvas.height - myDog.canvas.height) {
                myDog.y = myDog.y + 1;
            }
            break;
        case "e":
            if (myDog.x < canvas.width - myDog.canvas.width) {
                myDog.x = myDog.x + 1;
            }
            break;
        case "w":
            if (myDog.x > 0) {
                myDog.x = myDog.x - 1;
            }
            break;
        }
    }
    var myInterval = setInterval(moveDog, 10);
});