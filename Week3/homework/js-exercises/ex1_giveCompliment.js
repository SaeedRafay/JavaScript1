"use strict";

const giveCompliment = (name) => {
    const compliments = ["great", "awesome", "superb", "amazing", "incredible", "the best", "fantastic", "extraordinary", "stunning", "outstanding"];
    const randomCompliment = Math.round(Math.random() * (compliments.length - 1));
    console.log(`You are ${compliments[randomCompliment]}, ${name}!`);
};

giveCompliment("Saeed");
giveCompliment("Saeed");
giveCompliment("Saeed");
