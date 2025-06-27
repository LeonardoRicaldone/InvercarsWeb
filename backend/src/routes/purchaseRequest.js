import express from "express";
import purchaseRequestController from "../controllers/purchaseRequestController.js";
import multer from "multer";

const router = express.Router();

//Configurar una carpeta loca que guarde
//el registro de las imagenes subidas
const upload = multer({ dest: "public/" });

router.route("/")
.get(purchaseRequestController.getAllPurchaseRequests)
.post(upload.single("photocopyOfDui"), purchaseRequestController.insertPurchaseRequests)

router.post("/sendFinancingRequest", upload.fields([
    { name: "photocopyOfDui", maxCount: 1 },
    { name: "license", maxCount: 1 },
    { name: "proofOfSalary", maxCount: 1 },
    { name: "utilityReceipt", maxCount: 1 },
    { name: "afpAccountStatement", maxCount: 1 },
    { name: "copiesIvaIncome", maxCount: 1 }
  ]),
  purchaseRequestController.insertPurchaseRequestsFinanced);

router.route("/:id")
.put(upload.single("photocopyOfDui"), purchaseRequestController.updatePurchaseRequests)
.delete(purchaseRequestController.deletePurchasesRequests);

router.put("/updateFinancingRequest/:id",
  upload.fields([
    { name: "photocopyOfDui", maxCount: 1 },
    { name: "license", maxCount: 1 },
    { name: "proofOfSalary", maxCount: 1 },
    { name: "utilityReceipt", maxCount: 1 },
    { name: "afpAccountStatement", maxCount: 1 },
    { name: "copiesIvaIncome", maxCount: 1 }
  ]),
  purchaseRequestController.updatePurchaseRequestsFinanced
);

export default router;