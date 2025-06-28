import purchaseModel from "../models/Purchase.js"
import purchaseRequestModel from "../models/PurchaseRequest.js"
import financingModel from "../models/Financing.js"
import rentController from "./rentController.js";

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

//paymentMethod transactionId paid paymentDate deliveryDate
//Insert para agregar los detalles de ventas directas en el array
purchaseController.addDirectPurchaseDetails = async(req, res) => {

    //1- Pido los datos
    const { purchaseId, paymentMethod, transactionId, paid, paymentDate, deliveryDate } = req.body;

    try {
        
        const purchase = await purchaseModel.findById(purchaseId)

        const newPurchaseDetails = { paymentMethod, transactionId, paid, paymentDate, deliveryDate };

        //Si ya se había hecho un insert lo reemplazamos
        if(purchase.directPurchase.length > 0) {
            purchase.directPurchase[0] = newPurchaseDetails;
        } else {
            //Si no hay ninguna, lo inserto
            purchase.directPurchase.splice(0, 0, newPurchaseDetails)
        }

        await purchase.save();

        res.status(200).json({ message: 'Direct purchase details added', purchase });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

//idFinancing downPaymentAmount downPaymentPaid downPaymentDate deliveryDate
//Función para agregar los detalles de compras financiadas al array
purchaseController.addFinancedPurchaseDetails = async(req, res) => {

    //1- Pido los datos
    const { purchaseId, idFinancing, downPaymentAmount, downPaymentPaid, downPaymentDate, deliveryDate } = req.body;

    try {
        
        const purchase = await purchaseModel.findById(purchaseId)

        const newPurchaseDetails = { idFinancing, downPaymentAmount, downPaymentPaid, downPaymentDate, deliveryDate };

        //Si ya se había hecho un insert lo reemplazamos
        if(purchase.financingPurchase.length > 0) {
            purchase.financingPurchase[0] = newPurchaseDetails;
        } else {
            //Si no hay ninguna, lo inserto
            purchase.financingPurchase.splice(0, 0, newPurchaseDetails)
        }

        await purchase.save();

        res.status(200).json({ message: 'Financed purchase details added', purchase });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

// amount paid date
//Función para agregar del deposito inicial de compras por importación}
purchaseController.addInitialDeposit = async(req, res) => {

    //1- Pido los datos
    const { purchaseId, amount, paid, date } = req.body;

    try {
        
        const purchase = await purchaseModel.findById(purchaseId)

        const newInitialDepositDetails = { purchaseId, amount, paid, date };

        //Si ya se había hecho un insert lo reemplazamos
        if(purchase.initialDeposit.length > 0) {
            purchase.initialDeposit[0] = newInitialDepositDetails;
        } else {
            //Si no hay ninguna, lo inserto
            purchase.initialDeposit.splice(0, 0, newInitialDepositDetails)
        }

        await purchase.save();

        res.status(200).json({ message: 'Initial deposit added', purchase });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

// vehiclePrice commission transferFee bankFee paid date
//Función para agregar el costo del vehículo en compras por importación
purchaseController.addVehiclePurchase = async(req, res) => {

    //1- Pido los datos
    const { purchaseId, vehiclePrice, commission, transferFee, bankFee, paid, date} = req.body;

    try {
        
        const purchase = await purchaseModel.findById(purchaseId)

        const newVehiclePurchaseDetails = { vehiclePrice, commission, transferFee, bankFee, paid, date };

        //Si ya se había hecho un insert lo reemplazamos
        if(purchase.vehiclePurchase.length > 0) {
            purchase.vehiclePurchase[0] = newVehiclePurchaseDetails;
        } else {
            //Si no hay ninguna, lo inserto
            purchase.vehiclePurchase.splice(0, 0, newVehiclePurchaseDetails)
        }

        await purchase.save();

        res.status(200).json({ message: 'Vehicle purchase added', purchase });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}


// costTransport costCrane 
//Función para agregar el costo del transporte en compras por importación
purchaseController.addVehicleTransport = async(req, res) => {

    //1- Pido los datos
    const { purchaseId, costTransport, costCrane} = req.body;

    try {
        
        const purchase = await purchaseModel.findById(purchaseId)

        const newVehicleTransportDetails = { costTransport, costCrane };

        //Si ya se había hecho un insert lo reemplazamos
        if(purchase.vehicleTransport.length > 0) {
            purchase.vehicleTransport[0] = newVehicleTransportDetails;
        } else {
            //Si no hay ninguna, lo inserto
            purchase.vehicleTransport.splice(0, 0, newVehicleTransportDetails)
        }

        await purchase.save();

        res.status(200).json({ message: 'Vehicle transport added', purchase });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}


// freightCost taxAmount paid date
//Función para agregar el costo de la aduana en compras por importación
purchaseController.addVehicleCustoms = async(req, res) => {

    //1- Pido los datos
    const { purchaseId, freightCost, taxAmount, paid, date } = req.body;

    try {
        
        const purchase = await purchaseModel.findById(purchaseId)

        const newCustomsDetails = { freightCost, taxAmount, paid, date };

        //Si ya se había hecho un insert lo reemplazamos
        if(purchase.customs.length > 0) {
            purchase.customs[0] = newCustomsDetails;
        } else {
            //Si no hay ninguna, lo inserto
            purchase.customs.splice(0, 0, newCustomsDetails)
        }

        await purchase.save();

        res.status(200).json({ message: 'Vehicle customs added', purchase });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}


// saleValue accountPayment repairOption paid date
//Función para agregar el costo de la entrega en compras por importación
purchaseController.addVehicleDelivery = async(req, res) => {

    //1- Pido los datos
    const { purchaseId, saleValue, accountPayment, repairOption, paid, date } = req.body;

    try {
        
        const purchase = await purchaseModel.findById(purchaseId)

        const newVehicleDeliveryDetails = { saleValue, accountPayment, repairOption, paid, date };

        //Si ya se había hecho un insert lo reemplazamos
        if(purchase.delivery.length > 0) {
            purchase.delivery[0] = newVehicleDeliveryDetails;
        } else {
            //Si no hay ninguna, lo inserto
            purchase.delivery.splice(0, 0, newVehicleDeliveryDetails)
        }

        await purchase.save();

        res.status(200).json({ message: 'Vehicle delivery added', purchase });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}


// type amount paid date
//Función par agregar cargos adicionales en compras por importación
purchaseController.addAdditionalCharges = async(req, res) => {

    const { purchaseId, type, amount, paid, date } = req.body;

    try {
        
        //Primero obtengo cuál renta es en base a su ID
        const purchase = await purchaseModel.findById(purchaseId)

        //Agregar cargos adicionales al array de cargos de la renta
        purchase.additionalCharges.push({type, amount, paid, date})
        await purchase.save();

        res.status(200).json({ message: 'Additional charges added', purchase });

    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }
}


export default purchaseController;