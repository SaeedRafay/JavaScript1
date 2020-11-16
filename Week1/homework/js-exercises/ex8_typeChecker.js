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
console.log( typeof strFirstName == typeof strLastName ? "SAME TYPE" : "Not the same..." );
console.log( typeof strFirstName == typeof objEducation ? "SAME TYPE" : "Not the same..." );
console.log( typeof strFirstName == typeof objWork ? "SAME TYPE" : "Not the same..." );
console.log( typeof strLastName == typeof objWork ? "SAME TYPE" : "Not the same..." );
console.log( typeof strLastName == typeof objEducation ? "SAME TYPE" : "Not the same..." );
console.log( typeof objEducation == typeof objWork ? "SAME TYPE" : "Not the same..." );


// Using a function to perform the same task of comparing data type of variables with each other
const checkType = (a, b) => console.log( typeof a == typeof b ? "SAME TYPE" : "Not the same..." );
checkType(strFirstName, strLastName);
checkType(strFirstName, objEducation);
checkType(strFirstName, objWork);
checkType(strLastName, objWork);
checkType(strLastName, objEducation);
checkType(objEducation, objWork);
