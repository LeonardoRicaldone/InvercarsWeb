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

//Insert para agregar o reemplazar condiciones iniciales
rentController.setStartedConditions = async (req, res) => {

    //1- Pido los datos
    const { rentId, fuelLevelStarted, mileageStarted } = req.body;

    try {

        const rent = await rentModel.findById(rentId);

        if (!rent) {
            return res.status(404).json({ message: 'Rent not found' });
        }

        const newCondition = { fuelLevelStarted, mileageStarted };

        // Si ya hay una condición inicial, la reemplazamos
        if (rent.startedConditions.length > 0) {
            rent.startedConditions[0] = newCondition;
        } else {
            // Si no hay ninguna, la insertamos
            rent.startedConditions.splice(0, 0, newCondition);
        }

        await rent.save();

        res.status(200).json({ message: 'Started confidition added', rent });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

// Insertar o reemplazar returnConditions
rentController.setReturnConditions = async (req, res) => {

    const { rentId, fuelLevelReturned, mileageReturned } = req.body;

    try {

        const rent = await rentModel.findById(rentId);

        if (!rent) {
            return res.status(404).json({ message: 'Renta no encontrada' });
        }

        const newCondition = { fuelLevelReturned, mileageReturned };

        // Si ya hay una condición de retorno, la reemplazamos
        if (rent.returnConditions.length > 0) {
            rent.returnConditions[0] = newCondition;
        } else {
            // Si no hay ninguna, la insertamos
            rent.returnConditions.splice(0, 0, newCondition);
        }

        await rent.save();
        
        res.status(200).json({ message: 'Condición de retorno registrada', rent });

    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }
};

export default rentController;