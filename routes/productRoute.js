import express from "express";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductPhoto,
  getSingleProduct,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  relatedProductController,
  searchProductController,
  updateProduct,
} from "../controllers/productController.js";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProduct
);
router.get("/get-AllProduct", getAllProduct);
router.get("/get-singleProduct/:slug", getSingleProduct);
// get-photo
router.get("/product-photo/:pid", getProductPhoto);
router.delete("/delete-product/:pid", deleteProduct);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProduct
);
// filter product
router.post("/product-filters", productFiltersController);
// product count
router.get("/product-count", productCountController);
// product per page
router.get("/product-list/:page", productListController);
// SEARCH PRODUCT
router.get("/search/:keyword", searchProductController);
// similar product
router.get("/related-product/:pid/:cid", relatedProductController);
// category-wise-products
router.get("/product-category/:slug", productCategoryController);
// PAYMENT ROUT
// token
router.get("/braintree/token", braintreeTokenController);
// payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);
export default router;
