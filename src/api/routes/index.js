const express = require("express");
const router = express.Router();

const productsRoutes = require("./products");

router.get("/", (req, res) => {
  const instance = process.env.INSTANCE_NAME || "unknown";
  res.send(`Hello from ${instance} at ${new Date().toISOString()}`);
});

router.use("/products", productsRoutes);

module.exports = router;
