const mongoose = require("mongoose");
// const config = require("config");
const express = require("express");
const products = require("../routes/products");
const app = express();

mongoose
  .connect("mongodb://localhost/power")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to mognoDB !!!"));

app.use(express.json());
app.use("/api/products", products);

const port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}...`));
