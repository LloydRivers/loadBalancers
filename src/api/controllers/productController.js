const { insertProducts } = require("../models/productModel");

exports.seedProducts = async (req, res) => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();

    const products = json.products.map(
      ({
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
      }) => ({
        id,
        title,
        description,
        price,
        discount_percentage: discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
      })
    );

    await insertProducts(products);
    res.send(`Inserted ${products.length} products into the database.`);
  } catch (error) {
    console.error("Error seeding products:", error);
    res.status(500).send("Internal Server Error");
  }
};
