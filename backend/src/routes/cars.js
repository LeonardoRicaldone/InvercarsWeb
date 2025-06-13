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
//OJO con lo de "image", puede ser "photo", verificar

router.route("/:id")
.put(upload.array("images", 5), carsController.updateCars)
.delete(carsController.deleteCars)

export default router;