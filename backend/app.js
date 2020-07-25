const Express = require("express");
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");
const cors = require("cors");
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const acceptedOrigins = ["http://localhost:19006", "http://localhost:19001"];
const CORSOptions = (req, cb) => {
  const originUsed = req.header("Origin");
  const isAccepted = acceptedOrigins.indexOf(originUsed) !== -1;
  cb(null, { origin: isAccepted });
};

app.use(cors(CORSOptions));

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

app.listen(80, () => {
  console.log("Listening");
  GamesRoutes(app);
});
