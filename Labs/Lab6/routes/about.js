const express = require("express");
const router = express.Router();
//const data = require("../data/people.js");


const about = {
  name: "Besnik Balaj",
  cwid: "10417369",
  biography: "Hello! My name is Besnik Balaj and I am currently a 4/5 Computer Engineer at Stevens Institute of Technology. I was born in NY specifically at the Bronx but I lived since I was a wee little lad to now at Tuckahoe,NY. I spent my life mainly in NY with exception to vacations going outward such as to Europe where I went to Italy,France,Germany,Belgium,Switzerland,Kosovo and Albania. I started working on computers somewhat when I was in elementary because I learned how to use the Windows CMD to find out my WiFi password and then slowly just started to build computers. A thing I like to bring up to new people is that I can speak 3 languages which are English, Albanian and Italian (proficiency in that order).\n Currently I can proudly say I have knowledge in both Software and Hardware. I can describe how a FPGA works (and build some) as well as code for them which I find neat. My favorite langauges would have to Python/JavaScript/C++ since I spent more time using them and usually go to them for my work or projects. Althought I don't let my coding/nerd side get in the way of some of my hobbies. I played Football a lot during High School and still do since I am a part of a Flag Football club back in my hometown. Outside of football I do participate in the Badminton club here and keep up with some mechanic/computer clubs.",
  favoriteShows: ["Bojack Horseman", "Rick and Morty", "Game of Thrones", "The Men Who Built America", "Hard Knocks (when it's on)"],
  hobbies: ["Video Games", "Football", "Badminton", "Woodworking", "Computer Building"]
};

router.get("/", async (req, res) => {
  res.json(about);
});

module.exports = router;
