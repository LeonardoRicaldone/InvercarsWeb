import orderCarsModel from "../models/OrderCars.js"
import clientsModel from "../models/Clients.js"

//Creo un array de funciones vacias
const orderCarsController = {};

//SELECT
orderCarsController.getAllOrderCars = async(req, res) => {

    try {
        
        const orderCars = await orderCarsModel.find().populate('idClient')
        res.status(200).json(orderCars)

    } catch (error) {
        console.log("error" + error)
        res.status(500).json("Internal server error")
    }
}

//INSERT
orderCarsController.insertOrderCars = async(req, res) => {

    //1- Pedir los datos
    const { idClient, comment, brand, model, year, engine, cylinders, transmission, drivetrain, dateRequest, status } = req.body;

    try {
        
        //Guardamos todo en la base de atos
        const newOrderCar = new orderCarsModel({idClient, comment, brand, model, year, engine, cylinders, transmission, drivetrain, dateRequest, status})

        newOrderCar.save();

        res.status(200).json({message: "Order Car saved"})

    } catch (error) {
        
        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})

    }
}

//UPDATE
orderCarsController.updateOrderCars = async(req, res) => {

    //1- Pido las cosas
    const { idClient, comment, brand, model, year, engine, cylinders, transmission, drivetrain, dateRequest, status } = req.body;

    try {
        
        const orderCarUpdated = await orderCarsModel.findByIdAndUpdate(
            req.params.id,
            {idClient, comment, brand, model, year, engine, cylinders, transmission, drivetrain, dateRequest, status},
            {new: true}
        )

        if(!orderCarUpdated){
            return res.status(400).json({message: "Order car not found"})
        }

        res.status(200).json({message: "Order car updated"})

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

//ELIMINAR
orderCarsController.deleteOrderCars = async(req, res) => {

    try {
        
        const deleteOrderCar = await orderCarsModel.findByIdAndDelete(req.params.id);

        if(!deleteOrderCar){
            return res.status(400).json({message: "Order car not found"})
        }

        res.status(200).json({message: "Order car deleted"});

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

export default orderCarsController;