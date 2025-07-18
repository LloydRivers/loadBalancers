import { Router } from "express";
const router = Router();

import productsRoutes from "./products.js";

router.get("/", (req, res) => {
  const instance = process.env.INSTANCE_NAME || "unknown";
  res.send(`Hello from ${instance} at ${new Date().toISOString()}`);
});

router.use("/products", productsRoutes);

export default router;
