module.exports = (app) => {
  const auth = require("../controllers/auth.controllers.js");
  app.get("/api/auth", auth.validate);
  app.get("/auth/callback", auth.callback);
  app.get("/api/userinfo", auth.userInfo);
};
