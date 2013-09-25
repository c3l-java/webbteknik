/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var Animal, Dog, BigDog, Centipide, aFish, aDog, aBigDog, aCentipide, prop;
Animal = function (name, legs, color, sound) {
    "use strict";
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.sound = sound;
};
Animal.prototype.makeSound = function () {
    "use strict";
    console.log(this.sound);
};
Dog = function (name, color, sound, hairType) {
    "use strict";
    Animal.call(this, name, 4, color, sound);
    this.hairType = hairType;
};
Dog.prototype = new Animal();
BigDog = function (name, color, hairType) {
    "use strict";
    Dog.call(this, name, color, "GRRRRRRRRRRR", hairType);
    this.hairType = hairType;
};
BigDog.prototype = new Dog();
aFish = new Animal("Nemo", 1, "Black", "Blopp blopp");
aDog = new Dog("Buster", "Orange", "WoffWoofff", "short hair");
aBigDog = new BigDog("Hound", "Black", "long hair");
Object.prototype.stroke = function () {
    "use strict";
    console.log(this.name + " is sitting on it's " + this.legs + " legs and is very happy");
};
console.log(aBigDog instanceof Animal);
console.log(aBigDog instanceof Dog);
console.log(aBigDog instanceof BigDog);
console.log(aBigDog instanceof Object);
var array = [1, 2, 3, 4, 10];
for (prop in aBigDog) {
    if (aBigDog.hasOwnProperty(prop)) {
        console.log(prop + " " + aBigDog[prop]);
    }
}
for (prop in array) {
    console.log(prop + " " + array[prop]);
}