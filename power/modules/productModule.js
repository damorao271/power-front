const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

// Funcion que valida del producto
function validateProduct(producto) {
  const schema = {
    name: Joi.string().min(2).max(50).required(),
    quantity: Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
  };
  return Joi.validate(producto, schema);
}

module.exports.validate = validateProduct;
module.exports.Product = Product;
module.exports.productSchema = productSchema;
