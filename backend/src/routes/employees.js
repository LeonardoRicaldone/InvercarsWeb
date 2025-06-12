import express from "express";
import employeesController from "../controllers/employeesController.js"
import multer from "multer"

//Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

//Configurar una carpeta loca que guarde
//el registro de las imagenes subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(employeesController.getAllEmployees)
.post(upload.single("image"), employeesController.insertEmployees)
//OJO con lo de "image", puede ser "photo", verificar

router.route("/:id")
.put(upload.single("image"), employeesController.updateEmployees)
.delete(employeesController.deleteEmployees)

export default router;
