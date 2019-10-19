//Gotta switch this up a tad bit
const express = require("express");
const router = express.Router();
const data = require("../data/people.js");
//const postData = data.posts;

router.get("/", async (req, res) => {
  try {
    const peopleList = await data.getPeople();
    res.json(peopleList);
  } catch (e) {
    res.status(404).json({message:"not found!"});
  }
});
router.get("/:id", async (req, res) => {
  try {
    let number = parseInt(req.params.id);
    const person = await data.getPersonById(number);
    res.json(person);
  } catch (e) {
    res.status(404).json({ message: "Post not found" });
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

module.exports = router;
