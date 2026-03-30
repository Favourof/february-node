const env = require("./env");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: env.cloud_name,
  api_key: env.api_key,
  api_secret: env.api_secret,
});

module.exports = { cloudinary };
