"use strict";

let strFirstName = "Saeed Ahmed";
let strLastName = "Rafay";
let objEducation = {
    edu1: {
        dur: "2006-2008",
        dip: "High School",
        ins: "NJ Academy",
    },
    edu2: {
        dur: "2008-2010",
        dip: "Senior High School",
        ins: "NJ Intercollege",
    },
};
let objWork = {
    job1: {
        dur: "2010-2012",
        pos: "Web Designer",
        org: "Right Solution",
    },
    job2: {
        dur: "2012-2014",
        pos: "Web Agency Manager",
        org: "Thirteen Stripes Web Enterprise LLC",
    },
};


// Manually comparing data type of variables with each other
(typeof strFirstName == typeof strLastName) ? console.log("SAME TYPE") : console.log("Not the same...");
(typeof strFirstName == typeof objEducation) ? console.log("SAME TYPE") : console.log("Not the same...");
(typeof strFirstName == typeof objWork) ? console.log("SAME TYPE") : console.log("Not the same...");
(typeof strLastName == typeof objWork) ? console.log("SAME TYPE") : console.log("Not the same...");
(typeof strLastName == typeof objEducation) ? console.log("SAME TYPE") : console.log("Not the same...");
(typeof objEducation == typeof objWork) ? console.log("SAME TYPE") : console.log("Not the same...");


// Using a function to perform the same task of comparing data type of variables with each other
const typeChecker = (a, b) => (typeof a == typeof b) ? "SAME TYPE" : "Not the same...";
console.log(typeChecker(strFirstName, strLastName));
console.log(typeChecker(strFirstName, objEducation));
console.log(typeChecker(strFirstName, objWork));
console.log(typeChecker(strLastName, objWork));
console.log(typeChecker(strLastName, objEducation));
console.log(typeChecker(objEducation, objWork));