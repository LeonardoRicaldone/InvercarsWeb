import express from "express";
import modelsController from "../controllers/modelsController.js";

const router = express.Router();

router
  .route("/")
  .get(modelsController.getAllModels)
  .post(modelsController.insertModels)

router
  .route("/:id")
  .put(modelsController.updateModels)
  .delete(modelsController.deleteModels)

export default router;