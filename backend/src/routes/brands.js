import express from "express";
import brandsController from "../controllers/brandsController.js"
import multer from "multer"

//Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

//Configurar una carpeta loca que guarde
//el registro de las imagenes subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(brandsController.getAllBrands)
.post(upload.single("image"), brandsController.insertBrands)
//OJO con lo de "image", puede ser "logo", verificar

router.route("/:id")
.put(upload.single("image"), brandsController.updateBrands)
.delete(brandsController.deleteBrands)

export default router;
