"use strict";

const validateCreditNumber = (creditCardNum) => {
    let response;
    const lastDigitEvenCCNum = creditCardNum.slice(-1) % 2;
    const regexOnlyNumbersCCNum = /^\d+$/.test(creditCardNum);
    const regexTwoDiffNumbersCCNum = /^(\d)\1*$/.test(creditCardNum);
    let sumCCNum = 0;
    for (let digit of creditCardNum) {
        sumCCNum += parseInt(digit);
    }

    if (creditCardNum.length !== 16) {
        response = `Invalid! The input ${creditCardNum} should be 16 characters!`;
    } else if (!regexOnlyNumbersCCNum) {
        response = `Invalid! The input ${creditCardNum} should contain only numbers!`;
    } else if (regexTwoDiffNumbersCCNum) {
        response = `Invalid! The input ${creditCardNum} should contain at least two different numbers!`;
    } else if (lastDigitEvenCCNum !== 0) {
        response = `Invalid! The input ${creditCardNum} should have the last digit an even number!`;
    } else if (sumCCNum <= 16) {
        response = `Invalid! The sum of all digits in the input ${creditCardNum} must be greater than 16!`;
    } else {
        response = `Success! The input ${creditCardNum} is a valid credit card number!`;
    }
    console.log(response);
};

validateCreditNumber("a92332119c011112");
validateCreditNumber("4444444444444444");
validateCreditNumber("6666666666661666");
