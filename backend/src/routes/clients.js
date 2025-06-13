import express from "express";
import clientsController from "../controllers/clientsController.js";

//Router nos ayuda a colocar los métodos que tendrá mi ruta
const router = express.Router();

router.route("/registerCliente").post(clientsController.insertClients)
router.route("/addFavorites").post(clientsController.addFavoriteCar)


export default router;