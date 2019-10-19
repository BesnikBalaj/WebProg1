//Gotta switch this up a tad bit
const express = require("express");
const router = express.Router();
//const data = require("../data/people.js");


const myInfo = {name: 'Besnik Balaj', dateOfBirth: 'June 3rd', hometown: 'Tuckahoe, NY'};

router.get("/", async (req, res) => {
  res.json(myInfo);
});

module.exports = router;
