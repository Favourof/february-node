const dotenv = require("dotenv");
dotenv.config();

const env = {
  monogDB_url: process.env.MONGODBURL,
  port: process.env.PORT,
  jwt_secrect: process.env.JWT_SECRECT,
  expire_in: process.env.EXPIRE_IN,
};

module.exports = env;
