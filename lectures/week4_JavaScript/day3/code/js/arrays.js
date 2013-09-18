/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("arrays");
var anArray = [1, 3, 5, 7, 8, "hello", true,
    function () {}
];
/* Adding to Arrays */
// To add something to the end of the arraywe have push
anArray.push("Tom");
// To add to the begining use unshift
anArray.unshift(100);
// To update a specific index we can use []
anArray[2] = "Hej"; // changes 3 to "Hej"
/* Retieving from arrays */
console.log(anArray);
console.log(anArray[4]);
// Return and remove from the begining
console.log(anArray.shift());
console.log(anArray);
// Return and remove from the end
console.log(anArray.pop());
console.log(anArray);
var i;
// loop through all items in an array
for (i = 0; i < anArray.length; i = i + 1) {
    console.log(anArray[i]);
}
var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
board[0][0] = 'x';
console.log(board.join('\n'));