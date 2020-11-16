"use strict";

let arrMixed = [22.5, "Hello", true, { color: "blue" }];
let arrNewWonders = ["Taj Mahal", "Colloseum", "Machu Picchu", "Christ the Redeemer", "Chichen Itza", "Petra", "Great Wall of China"];
console.log("The length of the array arrMixed is: " + arrMixed.length);
console.log("The length of the array arrNewWonders is: " + arrNewWonders.length);

console.log( arrMixed.length == arrNewWonders.length ? "They are the same!" : "Two different sizes" );