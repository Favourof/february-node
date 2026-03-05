const express = require("express");
const app = express();

const productRoute = require("./routes/product.js");
const conectDB = require("./config/db.js");
const env = require("./config/env.js");
const userRoute = require("./routes/user.js");

app.use(express.json());

// product service
app.use("/product", productRoute);
// Auth route
app.use("/auth", userRoute);

app.get("/", (req, res) => {
  res.json("welcome to express js");
});

conectDB();

app.listen(env.port, () => {
  console.log("february is runiing on port 4001 ");
});
