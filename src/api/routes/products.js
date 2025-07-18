import { Router } from "express";
const router = Router();
import { seedProducts } from "../controllers/productController.js";

router.get("/seed", seedProducts);

export default router;
