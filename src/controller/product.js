const Product = require("../model/product");
const User = require("../model/user");

const addProduct = async (req, res) => {
  const { title, price, description, image } = req.body;
  // console.log(req.user, "form the middle ware");

  try {
    if (!title || !price || !description || !image) {
      return res.status(401).json({ message: "all fieald are required" });
    }

    const product = await Product.create(req.body);

    if (product) {
      return res
        .status(201)
        .json({ message: "product created Succefully", product });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error, error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    if (product) {
      return res
        .status(200)
        .json({ message: "Succefully", product, lenght: product.length });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error, error.message);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(product);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    return res
      .status(200)
      .json({ message: "Product updated Sucessdfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error, error.message);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    return res.status(200).json({ message: "Product Delete Sucessdfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error, error.message);
  }
};

module.exports = { addProduct, getProduct, updateProduct, deleteProduct };
