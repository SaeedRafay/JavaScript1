"use strict";


const gradeCalculator = (a, b) => {
  //
  const percentage = (a / b) * 100;
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

console.log(gradeCalculator(69, 75));