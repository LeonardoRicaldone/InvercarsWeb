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


  // Ruta para insertar o reemplazar los detalles de compras directas
  router.post("/add-direct-purchase-details", rentController.setStartedConditions);
  
export default router;