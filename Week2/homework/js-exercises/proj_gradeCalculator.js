"use strict";

// the function takes two numbers as parameters
// first parameter takes the score acheived
// the second parameter takes the total score
const gradeCalculator = (a, b) => {
  // convert score into a percentage
  const percentage = (a / b) * 100;

  // checking condition is each case
  // if the condition matches then the switch breaks and the value is returned
  switch (true) {
    case percentage >= 90:
      return `You got an A (${percentage}%)`;
      break;
    case percentage >= 80:
      return `You got a B (${percentage}%)`;
      break;
    case percentage >= 70:
      return `You got a C (${percentage}%)`;
      break;
    case percentage >= 60:
      return `You got a D (${percentage}%)`;
      break;
    case percentage >= 50:
      return `You got an E (${percentage}%)`;
      break;
    default:
      return `You got a F (${percentage}%)`;
      break;
  }
};

// testing the grade calculator function
console.log(gradeCalculator(60, 100));
console.log(gradeCalculator(69, 75));
console.log(gradeCalculator(93, 120));