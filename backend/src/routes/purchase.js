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

  // Ruta para agregar el desposito inicial de compras por importación
  router.post("/add-initial-deposit", purchaseController.addInitialDeposit)

  // Ruta para agregar el pago del costo del vehículo en compras por importación
  router.post("/add-vehicle-purchase", purchaseController.addVehiclePurchase)

  //Ruta para agregar el pago del transporte del vehículo en compras por importación
  router.post("/add-vehicle-transport", purchaseController.addVehicleTransport)

  //Ruta para agregar el pago del costo de aduanas en compras por importación
  router.post("/add-vehicle-customs", purchaseController.addVehicleCustoms)

  //Ruta para agregar el pago de la entrega del vehículo en compras por importación
  router.post("/add-vehicle-delivery", purchaseController.addVehicleDelivery)

  //Ruta para agregar cargos adicionales en compras por importación
  router.post("/add-additional-charges", purchaseController.addAdditionalCharges)

export default router;