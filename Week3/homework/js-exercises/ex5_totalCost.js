"use strict";

const cartForParty = {
    "Chips": 1.75,
    "Cola": 1.3,
    "Yoghurt": 1.59,
    "Cookies": 0.79,
    "Bananas": 2.37,
};

const calculateTotalPrice = (cartItems) => {
    let cartTotal = 0;
    for (const [key, value] of Object.entries(cartItems)) {
        cartTotal += value;
    }
    console.log(`Total: €${cartTotal}`);
};

calculateTotalPrice(cartForParty);
