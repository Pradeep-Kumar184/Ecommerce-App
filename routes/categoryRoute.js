import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/create-category", requireSignIn, isAdmin, createCategory);
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategory);
router.get("/get-category", getCategory);
router.get("/get-singleCategory/:slug", getSingleCategory);
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory);
export default router;
