import purchaseModel from "../models/Purchase.js"
import purchaseRequestModel from "../models/PurchaseRequest.js"
import financingModel from "../models/Financing.js"

//Creo un array de funciones vacías
const purchaseController = {};

//SELECT
purchaseController.getAllPurchase = async(req, res) => {

    try {
        
        const purchases = await purchaseModel.find().populate('idPurchaseRequest')
        res.status(200).json(purchases)

    } catch (error) {
        console.log("error" + error)
        res.status(500).json("Internal server error")
    }
}

//INSERT
purchaseController.insertPurchases = async(req, res) => {

    //1- Pedir los datos
    const { idPurchaseRequest, purchaseType, amount, paymentStatus, purchaseDate, state } = req.body;

    try {
        
        //Guardamos todo en la base de datos
        const newPurchase = new purchaseModel({idPurchaseRequest, purchaseType, amount, paymentStatus, purchaseDate, state})

        newPurchase.save();

        res.status(200).json({message: "Purchase saved"})

    } catch (error) {
        
        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})

    }
}

//UPDATE
purchaseController.updatePurchases = async(req, res) => {

    //1- Pido las cosas
    const { idPurchaseRequest, purchaseType, amount, paymentStatus, purchaseDate, state } = req.body;

    try {
        
        const puchaseUpdated = await purchaseModel.findByIdAndUpdate(
            req.params.id,
            {idPurchaseRequest, purchaseType, amount, paymentStatus, purchaseDate, state},
            {new: true}
        )

        if(!puchaseUpdated){
            return res.status(400).json({message: "Purchase not found"})
        }

        res.status(200).json({message: "Purchase updated"})

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

//ELIMINAR
purchaseController.deletePurchases = async(req, res) => {

    try {
        
        const deletePurchase = await purchaseModel.findByIdAndDelete(req.params.id);

        if(!deletePurchase){
            return res.status(400).json({message: "Purchase not found"})
        }

        res.status(200).json({message: "Purchase deleted"});

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export default purchaseController;