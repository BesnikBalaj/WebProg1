const express = require("express");
const router = express.Router();

const myStory = {
  storyTitle: "A Bidoofian Tale: The Bidoof Chronicles",
  story: "There once lived a Bidoof in the Sinnoh region. The Bidoof's name was Beanie.The reason he was given this name was because he wore a Beanie. Beanie lived in a small village with other Bidoofs. Today was going to be a great day for Beanie because this marked the day he was going to go on an adventure for the legendary Everstone. Little did Beanie know, the moment he stepped out the Village, a great adventure would begin.\n Following the travels of Beanie, he ends up meeting a plant that was moving next to him. Beanie waddled up to the plant and gave him some berries for an act of breaking bread. The plant approached Beanie and introduced himself as Bulb due to his creature name being Bulbasaur. Bulbasaur and Beanie talked about their travels and the reason Bulb was out here. Bulb said that he recently lost his friend, Slowpoke at a nearby snow biome called the Frozen Forest. The only thing Bidoof could ask was, 'What is the Frozen Forest?'"
};

router.get("/", async (req, res) => {
  res.json(myStory);
});

module.exports = router;
