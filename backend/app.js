const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const GamesRoutes = require("./routes/games.routes");

Mongoose.Promise = global.Promise;
Mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successful connection to db");
  })
  .catch((err) => {
    console.log("Could not connect to db...", err);
    process.exit();
  });

app.listen(5000, () => {
  console.log("Listening");
  GamesRoutes(app);
});
