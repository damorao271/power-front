const { Product, validate } = require("../modules/productModule");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const product = await await Product.find().sort("name");
  res.send(product);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  product = await product.save();

  res.send(product);
});

module.exports = router;
