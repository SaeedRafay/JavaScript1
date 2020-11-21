"use strict";

const validateCreditNumber = (creditCardNum) => {
    let response;

    // Taking the last digit and finding the remainder if divided by 2. If the last digit would be even number then the remainder should be zero.
    const lastDigitEvenCCNum = creditCardNum.slice(-1) % 2;

    // Using Regular Expression to find if the Credit Card Number string has all numbers in it.
    const regexOnlyNumbersCCNum = /^\d+$/.test(creditCardNum); 

    //Using Regular Expression to find two different digits in the Credit Card Number string.
    const regexTwoDiffNumbersCCNum = /^(\d)\1*$/.test(creditCardNum);

    // Adding all digits in the Credit Card Number string.
    let sumCCNum = 0;
    for (let digit of creditCardNum) {
        sumCCNum += parseInt(digit);
    }

    if (creditCardNum.length !== 16) { // Checking if Credit Card Number is 16 characters
        response = `Invalid! The input ${creditCardNum} should be 16 characters!`;
    } else if (!regexOnlyNumbersCCNum) { // Checking if Credit Card Number is numbers only
        response = `Invalid! The input ${creditCardNum} should contain only numbers!`;
    } else if (regexTwoDiffNumbersCCNum) { // Checking if Credit Card Number has at least two different digits
        response = `Invalid! The input ${creditCardNum} should contain at least two different numbers!`;
    } else if (lastDigitEvenCCNum !== 0) { // Checking if the last digit of Credit Card Number is an even number
        response = `Invalid! The input ${creditCardNum} should have the last digit an even number!`;
    } else if (sumCCNum <= 16) { // Checking if the sum of all digits in Credit Card Number is greater than 16
        response = `Invalid! The sum of all digits in the input ${creditCardNum} must be greater than 16!`;
    } else { // If the Credit Card number passes all the criteria mentioned above then it is valid
        response = `Success! The input ${creditCardNum} is a valid credit card number!`;
    }

    // Output the Credit Card number validity response
    console.log(response);
};


validateCreditNumber("a92332119c011112");
validateCreditNumber("4444444444444444");
validateCreditNumber("6666666666661666");
