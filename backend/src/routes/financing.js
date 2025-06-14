import express from "express";

import financingController from "../controllers/financingController.js";

const router = express.Router();

router
  .route("/")
  .get(financingController.getAllFinancings)
  .post(financingController.inserFinancings)

router
  .route("/:id")
  .put(financingController.updateFinancings)
  .delete(financingController.deleteFinancings)

export default router;