import redis from "../database/redisClient.js";

import {
  insertProducts,
  fetchAllProducts,
  fetchProductById,
} from "../models/productModel.js";

export const seedProducts = async (req, res) => {
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

export const getAllProducts = async (req, res) => {
  try {
    const cacheKey = "all-products";

    const cached = await redis.get(cacheKey);
    if (cached) {
      console.log("✅ Returning products from cache");
      return res.json(JSON.parse(cached));
    }

    const products = await fetchAllProducts();

    await redis.set(cacheKey, JSON.stringify(products), { EX: 60 });

    res.json(products);
  } catch (err) {
    console.error("Error getting products:", err);
    res.status(500).send("Internal Server Error");
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cacheKey = `product-${id}`;

    const cached = await redis.get(cacheKey);
    if (cached) {
      console.log(`✅ Product ${id} served from cache`);
      return res.json(JSON.parse(cached));
    }

    const product = await fetchProductById(id);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    await redis.set(cacheKey, JSON.stringify(product), { EX: 60 });

    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};
