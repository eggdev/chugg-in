require("dotenv").config();
const { google } = require("googleapis");

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env;
// http://localhost/api/auth
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
let authed = false;

exports.validate = async (req, res) => {
  if (!authed) {
    const url = oAuth2Client.generateAuthUrl({
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/plus.me",
        "openid",
      ],
    });
    res.redirect(url);
  } else {
  }
};

exports.userInfo = async (req, res) => {
  // const userInfo = await google.plus("v1").people.get({ userId: "me" });
  // console.log(userInfo);
  console.log(oAuth2Client);
  return res.json({ user: "user" });
};

// export

exports.callback = (req, res) => {
  const { code } = req.query;
  if (code) {
    oAuth2Client.getToken(code, async (err, tokens) => {
      if (err) res.status(500);
      else {
        oAuth2Client.setCredentials(tokens);
        authed = true;
        console.log(oAuth2Client);
        res.redirect("/api/userinfo");
      }
    });
  }
};
