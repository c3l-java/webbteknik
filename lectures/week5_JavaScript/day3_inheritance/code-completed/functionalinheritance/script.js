/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var createAnimal, createCat, aFish, aCat;
createAnimal = function (name, legs, color, sound) {
	"use strict";
	var that = {};
	that.name = name;
	that.legs = legs;
	that.color = color;
	that.sound = sound;
	that.makeSound = function () {
		console.log("I love singing " + that.sound);
	};
	that.dance = function () {
		if (that.legs === 0) {
			console.log("I can't dance you fool, I have no legs");
		} else {
			console.log("I'm dancing on my " + that.legs + " legs");
		}
	};
	return that;
};

aFish = createAnimal("nemo", 0, "orange", "blop blop blop");

createCat = function (name, color, sound, hairType) {
	"use strict";
	var that = createAnimal(name, 4, color, sound);
	that.hairType = hairType;
	return that;
};

aCat = createCat("Buster", "Black/White", "Meow", "Long hair");