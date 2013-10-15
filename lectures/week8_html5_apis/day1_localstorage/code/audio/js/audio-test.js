/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var audio;
$(function () {
    "use strict";
    audio = document.querySelector("audio");
    $("h1").click(function () {
        audio.load();
        audio.play();
    });
});