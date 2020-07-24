const Games = require("../models/games.model.js");

exports.findAll = (req, res) => {
  Games.find({}, (err, jobs) => {
    if (err) res.status(500).end();
    return res.json(jobs);
  });
};
