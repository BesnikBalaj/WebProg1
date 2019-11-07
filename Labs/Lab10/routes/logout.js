const express = require("express");
const router = express.Router();
const data = require("../data/users.json");
const session = require("express-session");

router.get("/", async (req,res) => {
	res.render("logout")
	req.session.user = undefined;
  //it will provide a URL hyperlink to the / route lol
});

module.exports = router;
