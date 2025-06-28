import express from "express";
import purchaseController from "../controllers/purchaseController.js";

const router = express.Router();

router
  .route("/")
  .get(purchaseController.getAllPurchase)
  .post(purchaseController.insertPurchases)

router
  .route("/:id")
  .put(purchaseController.updatePurchases)
  .delete(purchaseController.deletePurchases)

export default router;