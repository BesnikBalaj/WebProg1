const express = require("express");
const router = express.Router();
//const data = require("../data/people.js");


const myeducation =
[
    {
      schoolName: "Tuckahoe High School",
      degree: "High School Diploma",
      favoriteClass: "AP Calculus",
      favoriteMemory: "Won 9 Excellency Awards on my Birthday for having highest grade."
    },
    {
      schoolName: "Stevens Institute of Technology",
      degree: "Bachelor's Degree in Engineering for Computer Engineering",
      favoriteClass: "CS-555(Agile with Prof Rowland,)",
      favoriteMemory: "Co-Founder of the Badminton Club and 3 year in a row Treasurer"
    },
    {
      schoolName: "Stevens Institute of Technology",
      degree: "Will be: Master's Degree in Engineering for Computer Engineering with a concentration in AI/Big Data",
      favoriteClass: "Machine Learning in CPE",
      favoriteMemory: "I have not been a grad yet so I guess getting my degree when I do?"
    }
];

router.get("/", async (req, res) => {
  res.json(myeducation);
});

module.exports = router;
