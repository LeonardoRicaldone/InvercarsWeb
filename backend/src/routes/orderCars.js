import express from "express";
import orderCarsController from "../controllers/orderCarsController.js";

const router = express.Router();

router
  .route("/")
  .get(orderCarsController.getAllOrderCars)
  .post(orderCarsController.insertOrderCars)

router
  .route("/:id")
  .put(orderCarsController.updateOrderCars)
  .delete(orderCarsController.deleteOrderCars)

export default router;