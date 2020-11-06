"use strict";

let recipe = {};
recipe.title = "Omelette";
recipe.servings = 2;
recipe.ingredients = ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"];

for (const key in recipe) {
  if (recipe.hasOwnProperty(key)) {
    const element = recipe[key];
    if (key == "title") {
      console.log("Meal name: " + element);
    } else if (key == "servings") {
      console.log("Serves: " + element);
    } else if (key == "ingredients") {
      console.log("Ingredients: " + element.join(", "));
    }
  }
}