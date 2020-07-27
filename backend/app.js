require("dotenv").config();
const Express = require("express");
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");
const cors = require("cors");
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 80;
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
const AuthRoutes = require("./routes/auth.routes");

Mongoose.Promise = global.Promise;
Mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successful connection to db");
  })
  .catch((err) => {
    console.log("Could not connect to db...", err);
    process.exit();
  });

app.listen(PORT, () => {
  console.log("Listening");
  GamesRoutes(app);
  AuthRoutes(app);
});
