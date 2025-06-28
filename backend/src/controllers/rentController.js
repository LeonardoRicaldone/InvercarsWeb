import rentModel from "../models/Rent.js"
import rentalApplicationModel from "../models/RentalApplication.js"

//Creo un array de funciones vacías
const rentController = {};

//SELECT
rentController.getAllRents = async(req, res) => {

    try {
        
        const rents = await rentModel.find().populate('idRentalApplication')
        res.status(200).json(rents)

    } catch (error) {
        console.log("error" + error)
        res.status(500).json("Internal server error")
    }
}

//INSERT
rentController.insertRents = async(req, res) => {

    //1- Pedir los datps
    const {idRentalApplication, depositPaid, depositState, actualReturnDate, depositReturned, totalCost, state} = req.body;

    try {
        
        //Guardamos todo en la base de datos
        const newRent = new rentModel({idRentalApplication, depositPaid, depositState, actualReturnDate, depositReturned, totalCost, state})

        newRent.save();

        res.status(200).json({message: "Rent saved"})

    } catch (error) {
        
        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})

    }
}

//UPDATE
rentController.updateRents = async(req, res) => {

    //1- Pido las cosas
    const {idRentalApplication, depositPaid, depositState, actualReturnDate, depositReturned, totalCost, state} = req.body;

    try {
        
        const rentUpdated = await rentModel.findByIdAndUpdate(
            req.params.id,
            {idRentalApplication, depositPaid, depositState, actualReturnDate, depositReturned, totalCost, state},
            {new: true}
        )

        if(!rentUpdated){
            return res.status(400).json({message: "Rent not found"})
        }

        res.status(200).json({message: "Rent updated"})

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

//ELIMINAR
rentController.deleteRents = async(req, res) => {

    try {
        
        const deleteRent = await rentModel.findByIdAndDelete(req.params.id);

        if(!deleteRent){
            return res.status(400).json({message: "Rent not found"})
        }

        res.status(200).json({message: "Rent deleted"});

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export default rentController;