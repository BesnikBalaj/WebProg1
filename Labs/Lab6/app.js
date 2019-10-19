const express = require("express");
const app = express();
const configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, () => {
  console.log("We have now acquired the Poke-Server!");
  console.log("Your Poke-Routes will be running on http://localhost:3000");
});
