const dotenv = require("dotenv");
dotenv.config();

const env = {
  monogDB_url: process.env.MONGODBURL,
  port: process.env.PORT,
  jwt_secrect: process.env.JWT_SECRECT,
  expire_in: process.env.EXPIRE_IN,
  api_key: process.env.API_KEY,
  cloud_name: process.env.CLOUD_NAME,
  api_secret: process.env.API_SECRET,
};

module.exports = env;
