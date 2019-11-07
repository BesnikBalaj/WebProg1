const express = require("express");
const router = express.Router();
const data = require("../data/users.json");
const session = require("express-session")

const authChecker = (req,res,next) => {
	if(req.session.user){
		next()
	}
	else{
		//res.render('error', {error: "not authenticated" });
    res.status(403).json({ error: "Ye are not authenticated -- Rawr Test2"});
		res.render('error',{error: "You are not authenticated to exist here. Trotle guards get him!"})
	}
};

router.get("/", authChecker, async (req,res) => {
	res.render("private", req.session.user)
});

module.exports = router;
