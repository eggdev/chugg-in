const mongoose = require("mongoose");
const GamesSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    max_players: String,
    min_players: String,
    equipment_cat: String,
    creator: String,
    setup: Array,
    rules: Array,
  },
  { collection: "games" }
);
module.exports = mongoose.model("Games", GamesSchema);
