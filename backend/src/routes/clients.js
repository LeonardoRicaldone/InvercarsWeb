import express from "express";
import clientsController from "../controllers/clientsController.js";

//Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

router.route("/")
.get(clientsController.getClients)

router.route("/registerClient").post(clientsController.insertClients)
router.route("/addFavorites").post(clientsController.addFavoriteCar)
router.route("/addHistoryCar").post(clientsController.addHistoryCar)

router.route("/:id")
.put(clientsController.updateClients)
.delete(clientsController.deleteClients);


export default router;