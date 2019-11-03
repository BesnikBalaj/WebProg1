const express = require("express");
const router = express.Router();
const data = require("../data/people.js");

router.get("/:id", async (req,res) => {
  try
  {
    console.log(req.params.id)
    const peopleData = await data.getPersonById(parseInt(req.params.id));
    res.status(200);//cause its good practice
    res.render("layouts/details", peopleData);
  }
  catch (e){
    console.log(e);
    //res.status(500).json({message: 'Das no bueno ID given most likely'});
    res.status(500).render("layouts/details");
  }
});

module.exports = router;
