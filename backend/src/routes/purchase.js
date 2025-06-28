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
  router.post("/add-direct-purchase-details", purchaseController.addDirectPurchaseDetails);

  // Ruta para insertar o reemplazar los detalles de compras financiadas
  router.post("/add-financed-purchase-details", purchaseController.addFinancedPurchaseDetails);

export default router;