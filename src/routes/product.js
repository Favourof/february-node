const express = require("express");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");
const authenticate = require("../middleware/token");
const { checkRole } = require("../middleware/adminRole");

const route = express.Router();

route.post("/", authenticate, checkRole, addProduct);
route.get("/", getProduct);
route.put("/:id", authenticate, checkRole, updateProduct);
route.delete("/:id", authenticate, checkRole, deleteProduct);

module.exports = route;
