const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");

//app.use(bodyParser.json());
app.use(express.json());
configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a Poke-server!");
  console.log("Your Poke-Routes will be running on http://localhost:3000");
});
