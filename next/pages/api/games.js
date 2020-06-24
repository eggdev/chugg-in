import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const games = nextConnect();
games.use(middleware);

games.get(async (req, res) => {
  const games = await req.db.collection("games").find({}).toArray();
  res.status = 200;
  res.json(games);
});

export default games;
