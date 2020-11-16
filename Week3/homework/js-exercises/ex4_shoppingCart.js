"use strict";

const shoppingCart = ["bananas", "milk"];

const addToShoppingCart = (groceryItem) => {
    if (shoppingCart.length >= 3) shoppingCart.shift();
    shoppingCart.push(groceryItem);
    console.log(`You bought ${shoppingCart.join(", ")}!`);
};

addToShoppingCart("chocolate");
addToShoppingCart("waffles");
addToShoppingCart("tea");