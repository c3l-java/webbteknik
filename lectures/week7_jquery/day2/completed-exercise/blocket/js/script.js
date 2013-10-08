/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var cats = [],
    totalPrice = 0,
    priceArray = [];
$(function () {
    "use strict";
    console.clear();
    $(".item_link").each(function () {
        cats.push($(this).text());
    });
    $(".list_price").each(function () {
        var num = Number($(this).text().trim().replace(":-", "").replace(/\s/g, ''));
        priceArray.push(num);
        totalPrice = totalPrice + num;
    });
});