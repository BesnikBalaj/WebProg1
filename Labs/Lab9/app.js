//Cite: https://github.com/stevens-cs546-cs554/CS-546/blob/master/Lectures/lecture_08/code/app.js
const express = require('express');
const app = express();
const path = require("path")
const exphbs = require('express-handlebars');
const static = express.static(__dirname +  '/public');
app.use(express.json());
app.use(static); //dis is crazyyyy

app.get("/",(req,res) => {
	res.sendFile(path.join(static))
})

app.use("*",(req,res) => {
	res.sendStatus(404);
})

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});
