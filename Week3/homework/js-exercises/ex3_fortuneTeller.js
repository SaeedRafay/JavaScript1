"use strict";

const numChildren = [6, 3, 1, 7, 5];
const partnerNames = ["Ahmed", "Tina", "Juan", "Eva", "Hina"];
const locations = ["Netherlands", "Canada", "Italy", "Japan", "Brazil"];
const jobs = ["farmer", "doctor", "programmer", "teacher", "engineer"];

const tellFortune = (numChildren, partnerNames, locations, jobs) => {
    const randomNumChildren = Math.floor(Math.random() * numChildren.length);
    const randomPartnerNames = Math.floor(Math.random() * partnerNames.length);
    const randomLocations = Math.floor(Math.random() * locations.length);
    const randomJobs = Math.floor(Math.random() * jobs.length);

    console.log(`You will be a ${jobs[randomJobs]} in ${locations[randomLocations]}, married to ${partnerNames[randomPartnerNames]} with ${numChildren[randomNumChildren]} kids.`);
};

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
