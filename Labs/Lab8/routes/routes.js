const routes = require("./routes");
const path = require("path");

const constructorMethod = app => {
  app.use("/", allRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({error: "Non molto bueno signore"})
  });
};

module.exports = constructorMethod;
