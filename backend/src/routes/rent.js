import express from "express";
import rentController from "../controllers/rentController.js";

const router = express.Router();

router
  .route("/")
  .get(rentController.getAllRents)
  .post(rentController.insertRents)

router
  .route("/:id")
  .put(rentController.updateRents)
  .delete(rentController.deleteRents)

export default router;