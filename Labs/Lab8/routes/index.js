const searchR = require("./search");
const detailsR = require("./details");
const path = require("path");
//present in Prof Hill's Github page
const constructorMethod = app => {
  app.use("/search", searchR);
  app.use("/details", detailsR);
  console.log('Rawr?')//used for testing
  app.get("/", (req, res) => {
    res.render('layouts/form')
  });

  app.use("*", (req, res) => {
    console.log(req.params.id);
    res.status(404).json({ error: "404 Not found TEST TEST"});
  });
};

module.exports = constructorMethod;

/*
const searchR = require("./search");
const detailsR = require("./details");
//present in Prof Hill's Github page
const path = require("path");
/*
const constructorMethod = app => {
  app.use("/search", searchR);
  console.log('Rawr?')
  app.use("/details", detailsR);
  app.get("/", (req, res) => {
    res.render('layouts/form')
  });

  app.use("*", (req, res) => {
    res.status(404).json({ error: "404 Not found HI"});
  });
};
/*
*/
