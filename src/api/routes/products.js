import { Router } from "express";
const router = Router();
import {
  seedProducts,
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

router.get("/seed", seedProducts);
router.get("/", getAllProducts);
router.get("/:id", getProductById);

export default router;
