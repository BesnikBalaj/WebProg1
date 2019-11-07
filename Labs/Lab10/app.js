const express = require("express");
const app = express();
const path = require("path")
const exphbs = require("express-handlebars");
const configRoutes = require("./routes");
const cookies = require("cookie-parser")
const session = require("express-session");

app.engine("handlebars",exphbs({defaultLayout:"main"}))
app.set("view engine","handlebars")
app.use(express.urlencoded({extended:false}));
//https://expressjs.com/en/guide/writing-middleware.html
//
const authChecker = (req,res,next) => {
	if(req.session.user){
		next()
	}
	else{
		res.status(403).render("error", {error: "not authenticated" });
	}
}

app.use((req, res, next) => {
	console.log((new Date().toUTCString()), (req.method), (req.originalUrl))
	next()
})

app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!',
  resave: false,
  saveUninitialized: true
}))

app.get("/", (req,res) => {
	if (req.session.user){
		res.redirect("/private");
	}
	else{
		res.render("form");
	}
	//req.session.user ? res.redirect("/private") : res.render("form")
})
configRoutes(app);


app.use("*",(req,res) => {
	res.sendStatus(404);
})




app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
