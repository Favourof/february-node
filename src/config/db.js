const mongoose = require("mongoose");
const env = require("./env");

const conectDB = async () => {
  try {
    const conn = await mongoose.connect(env.monogDB_url);
    if (conn) {
      console.log("DB connected succefully");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = conectDB;
