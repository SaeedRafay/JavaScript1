"use strict";

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

drinkTypes.forEach(drink => {
    for (let i = 0; i < 2; i++) {
        if (drinkTray.length < 5) {
            drinkTray.push(drink);
        }
    }
});

console.log("Hey guys, I brought a " + drinkTray.join(", ") + "!");