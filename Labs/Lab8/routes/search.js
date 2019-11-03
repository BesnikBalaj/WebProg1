const express = require("express");
const router = express.Router();
const data = require("../data/people.js");

router.get("/", (req,res) => {
  res.render("layouts/search");
});

router.post("/", async (req,res) => {
  try
  {
    const peopleData = await data.getPersonthroughInput(req.body.personName);
    if (req.body.personName = ""){
      res.status(400).render('layouts/search');
      return;
    }
    if (peopleData.length === 0){
      //no one was found sadly
      res.status(400).render('layouts/search');
      return;
    }
    else{
      res.status(202).render('layouts/search', {allPeeps : peopleData});
      return;
    }
  }
  catch (e){
    console.log(e);
    res.status(400).render('layouts/search');
  }

})

module.exports = router;
