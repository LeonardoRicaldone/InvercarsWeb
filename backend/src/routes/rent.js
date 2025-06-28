import express from "express";
import rentController from "../controllers/rentController.js";

//Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

//Configurar una carpeta loca que guarde
//el registro de las imagenes subidas
const upload = multer({dest: "public/"})

router
  .route("/")
  .get(rentController.getAllRents)
  .post(rentController.insertRents)

router
  .route("/:id")
  .put(rentController.updateRents)
  .delete(rentController.deleteRents)


  // Ruta para insertar o reemplazar condiciones iniciales
  router.post("/set-started-conditions", rentController.setStartedConditions);

  // Ruta para insertar o reemplazar condiciones de retorno
  router.post("/set-return-conditions", rentController.setReturnConditions);

  //Ruta para agregar daños pre existentes en la renta
  router.post("/add-damage", upload.single("photo"), rentController.addPreExistingDamage);

  //Ruta para agregar comentarios a la renta
  router.post("/add-review", rentController.addReview);

export default router;