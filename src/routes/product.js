const express = require("express");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

const route = express.Router();

route.post("/", addProduct);
route.get("/", getProduct);
route.put("/:id", updateProduct);
route.delete("/:id", deleteProduct);

module.exports = route;
