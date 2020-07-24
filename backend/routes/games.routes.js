module.exports = (app) => {
  const games = require("../controllers/games.controllers.js");
  app.get("/api/games", games.findAll);
  app.get("/api/games/:id", games.findOne);
  app.post("/api/game", games.createOne);
};
