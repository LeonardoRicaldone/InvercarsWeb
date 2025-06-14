import financingModel from "../models/Financing.js"

//Creo un array de funciones vacías
const financingController = {};

//SELECT
financingController.getAllFinancings = async(req, res) => {

    try {
        const financings = await financingModel.find().populate('idPurchaseRequest')
        res.status(200).json(financings)
    } catch (error) {
        console.log("error" + error)
        res.status(500).json("Internal server error")
    }
}

//INSERT
financingController.inserFinancings = async(req, res) => {

    //1- Pedir los datos
    const { idPurchaseRequest, downPaymentPercentage, downPaymentAmount, term, interestRate, lateFeeRate, startDate, totalAmount, status } = req.body;

    try {
        
        //Guardamos todo en la base de datos
        const newFinancing = new financingModel({ idPurchaseRequest, downPaymentPercentage, downPaymentAmount, term, interestRate, lateFeeRate, startDate, totalAmount, status })

        newFinancing.save();

        res.status(200).json({message: "Financing saved"})
    } catch (error) {
        
        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})

    }
}

//UPDATE
financingController.updateFinancings = async(req, res) => {

    //1- Pido las cosas
    const { idPurchaseRequest, downPaymentPercentage, downPaymentAmount, term, interestRate, lateFeeRate, startDate, totalAmount, status } = req.body;

    try {
        
        const financingUpdated = await financingModel.findByIdAndUpdate(
            req.params.id,
            {idPurchaseRequest, downPaymentPercentage, downPaymentAmount, term, interestRate, lateFeeRate, startDate, totalAmount, status},
            {new: true}
        )

        if(!financingUpdated){
            return res.status(400).json({message: "Financing not found"})
        }

        return res.status(200).json({message: "Financing updated"})
    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

//ELIMINAR
financingController.deleteFinancings = async(req, res) => {

    try {
        
        const deleteFinancing = await financingModel.findByIdAndDelete(req.params.id);

        if(!deleteFinancing){
            return res.status(400).json({message: "Financing not found"})
        }

        res.status(200).json({message: "Financing deleted"});

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export default financingController;