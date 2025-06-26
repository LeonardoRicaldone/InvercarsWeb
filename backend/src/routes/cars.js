import express from "express";
import carsController from "../controllers/carsController.js"
import multer from "multer"

//Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

//Configurar una carpeta loca que guarde
//el registro de las imagenes subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(carsController.getAllCars)
.post(upload.array("images", 5), carsController.insertCars)
router.route("/addOfferCar")
.post(carsController.addOfferCar)
router.route("/rentalCars")
.get(carsController.getRentalCars)

router.route("/:id")
.put(upload.array("images", 5), carsController.updateCars)
.delete(carsController.deleteCars)

export default router;