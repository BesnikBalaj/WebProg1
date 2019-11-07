const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const data = require("../data/users.json");
const session = require("express-session")
const saltRounds = 16;
//Work on login for bottom

router.post("/", async (req,res) => {
	for(var i = 0; i < data.length; i++){
		let usernameS = req.body.username;
		let submittedUS = usernameS.toLowerCase();
		let storedN = data[i].username;
		let storedUS = storedN.toLowerCase();
		//console.log(storedN);
		//console.log(usernameS)
		if(submittedUS === storedUS){
			//console.log('MonkaS')
			const hash = await bcrypt.compare(req.body.password, data[i].hashedPassword);
			if(hash === true){
				req.session.user = data[i];
        res.redirect("/private");
				return;
			}
		}
	}
	res.render("form", { error: "Invalid Login info" } )

})

module.exports = router;
