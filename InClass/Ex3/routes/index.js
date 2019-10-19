const infoRoutes = require("./myinfo");
const peopleRoutes = require("./people");

const constructorMethod = app => {
  app.use("/myinfo", infoRoutes);
  app.use("/people", peopleRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
