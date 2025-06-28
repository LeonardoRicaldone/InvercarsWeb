import express from "express";
import rentalApplicationController from "../controllers/rentalApplicationController.js";
import multer from "multer";

const router = express.Router();

//Configurar una carpeta loca que guarde
//el registro de las imagenes subidas
const upload = multer({ dest: "public/" });

router
  .route("/")
  .get(rentalApplicationController.getAllRentalApplications)
  .post(upload.fields([
    { name: "photoLicense", maxCount: 1 },
    { name: "photoDUI", maxCount: 1 }
  ]), rentalApplicationController.insertRentalApplications);

router.route("/:id")
  .delete(rentalApplicationController.deleteRentalApplications);
router.route("/:id")
  .put(upload.fields([
    { name: "photoLicense", maxCount: 1 },
    { name: "photoDUI", maxCount: 1 }
  ]), rentalApplicationController.insertRentalApplications);
  

export default router;