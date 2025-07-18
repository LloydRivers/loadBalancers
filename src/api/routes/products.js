const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/seed", productController.seedProducts);

module.exports = router;

