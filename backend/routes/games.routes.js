module.exports = (app) => {
  const games = require("../controllers/games.controllers.js");
  app.get("/api/games", games.findAll);
};
