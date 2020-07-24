const Games = require("../models/games.model.js");

exports.findAll = (req, res) => {
  let limit = req.query.limit ? req.query.limit : 25;
  Games.find({}, (err, games) => {
    if (err) res.status(500).end();
    return res.json({ games: games.splice(0, limit) });
  });
};

exports.findOne = (req, res) => {
  Games.find({ _id: req.params.id }, (err, game) => {
    if (err) res.status(500).end();
    return res.json({ game: game[0] });
  });
};

exports.createOne = (req, res) => {
  // Validators required
  Games.create(req.body, (err, newGame) => {
    if (err) res.status(500).end();
    return res.json({ game: newGame });
  });
};
