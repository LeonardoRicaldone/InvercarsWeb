import purchaseRequestModel from "../models/PurchaseRequest.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

//1- Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

//Creo un array de funciones vacías
const purchaseRequestController = {};

//SELECT
purchaseRequestController.getAllPurchaseRequests = async (req, res) => {

    try {
        const purchaseRequests = await purchaseRequestModel.find().populate('idClient').populate('idCar');
        res.status(200).json(purchaseRequests);
    } catch (error) {
        console.error("error", error);
        res.status(500).json("Internal server error");
    }

}

//INSERT Purchase (Al contado y con exportación)
purchaseRequestController.insertPurchaseRequests = async (req, res) => {
    //1- Pedir los datos
    const { idClient, idCar, name, lastname, email, birthdate, phone, address, paymentMethodOptions, requestDate, status, typeRequest } = req.body;
    let photocopyOfDuiURL = "";

    try {

        //Subir las imagen
        if (req.file) {
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: "public",
                    allowed_formats: ["png", "jpg", "jpeg", "webp"]
                }
            );
            //Guardo en la variable la URL de donde se subió la imagen
            photocopyOfDuiURL = result.secure_url;
        }

        //Guardar todo en la base de datos
        const newPurchaseRequest = new purchaseRequestModel({idClient, idCar, name, lastname, email, birthdate, phone, address, photocopyOfDui: photocopyOfDuiURL, paymentMethodOptions, requestDate, status, typeRequest});

        newPurchaseRequest.save();

        res.status(200).json({ message: "Purchase request saved" });

    } catch (error) {

        console.error("ERROR insertPurchaseRequest:", error);
        res.status(500).json({ message: "Internal server error" });

    }

}

//INSERT Purchase (Financiado)
purchaseRequestController.insertPurchaseRequestsFinanced = async (req, res) => {

    //1- Pedir los datos
    const { idClient, idCar, name, lastname, email, birthdate, phone, address, paymentMethodOptions, requestDate, status, typeRequest, term, personalEmploymentReferences } = req.body;

    try {
        
        //Subir las imagenes a Cloudinary
        let photocopyOfDuiURL = "";
        let proofOfSalaryURL = "";
        let utilityReceiptURL = "";
        let afpAccountStatementURL = "";
        let licenseURL = "";
        let copiesIvaIncomeURL = "";

        if (req.files) {
            if (req.files.photocopyOfDui) {
                const result = await cloudinary.uploader.upload(
                    req.files.photocopyOfDui[0].path,
                    {
                        folder: "public",
                        allowed_formats: ["png", "jpg", "jpeg", "webp"]
                    }
                );
                photocopyOfDuiURL = result.secure_url;
            }
            if (req.files.proofOfSalary) {
                const result = await cloudinary.uploader.upload(
                    req.files.proofOfSalary[0].path,
                    {
                        folder: "public",
                        allowed_formats: ["png", "jpg", "jpeg", "webp"]
                    }
                );
                proofOfSalaryURL = result.secure_url;
            }
            if (req.files.utilityReceipt) {
                const result = await cloudinary.uploader.upload(
                    req.files.utilityReceipt[0].path,
                    {
                        folder: "public",
                        allowed_formats: ["png", "jpg", "jpeg", "webp"]
                    }
                );
                utilityReceiptURL = result.secure_url;
            }
            if (req.files.afpAccountStatement) {
                const result = await cloudinary.uploader.upload(
                    req.files.afpAccountStatement[0].path,
                    {
                        folder: "public",
                        allowed_formats: ["png", "jpg", "jpeg", "webp"]
                    }
                );
                afpAccountStatementURL = result.secure_url;
            }
            if (req.files.license) {
                const result = await cloudinary.uploader.upload(
                    req.files.license[0].path,
                    {
                        folder: "public",
                        allowed_formats: ["png", "jpg", "jpeg", "webp"]
                    }
                );
                license = result.secure_url;
            }
            if (req.files.copiesIvaIncome) {
                const result = await cloudinary.uploader.upload(
                    req.files.copiesIvaIncome[0].path,
                    {
                        folder: "public",
                        allowed_formats: ["png", "jpg", "jpeg", "webp"]
                    }
                );
                copiesIvaIncomeURL = result.secure_url;
            }

        }

        //Guardar todo en la base de datos
        const newPurchaseRequest = new purchaseRequestModel({
            idClient, 
            idCar, 
            name, 
            lastname, 
            email, 
            birthdate, 
            phone, 
            address, 
            photocopyOfDui: photocopyOfDuiURL, 
            paymentMethodOptions, 
            requestDate, 
            status, 
            typeRequest,
            term,
            proofOfSalary: proofOfSalaryURL,
            utilityReceipt: utilityReceiptURL,
            afpAccountStatement: afpAccountStatementURL,
            license: licenseURL,
            personalEmploymentReferences,
            copiesIvaIncome: copiesIvaIncomeURL
        });

        newPurchaseRequest.save();

        res.status(200).json({ message: "Rental Application saved" });

    } catch (error) {
        console.error("error", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//UPDATE (Al contado y con exportación)
purchaseRequestController.updatePurchaseRequests = async(req, res) => {
    
    //1- Pido las cosas
    const { idClient, idCar, name, lastname, email, birthdate, phone, address, photocopyOfDui: photocopyOfDuiURL, paymentMethodOptions, requestDate, status, typeRequest } = req.body;

    try {
        
        const purchaseRequestUpdated = await purchaseRequestModel.findByIdAndUpdate(
            req.params.id,
            {idClient, idCar, name, lastname, email, birthdate, phone, address, photocopyOfDui: photocopyOfDuiURL, paymentMethodOptions, requestDate, status, typeRequest},
            {new: true}
        )

        if(!purchaseRequestUpdated){
            return res.status(400).json({message: "Purchase request not found"})
        }

        res.status(200).json({message: "Purchase request updated"})

    } catch (error) {
        
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})

    }
}

//UPDATE (Financiado)
purchaseRequestController.updatePurchaseRequestsFinanced = async(req, res) => {

    //1- Pido las cosas
    const {
            idClient, 
            idCar, 
            name, 
            lastname, 
            email, 
            birthdate, 
            phone, 
            address, 
            photocopyOfDui: photocopyOfDuiURL, 
            paymentMethodOptions, 
            requestDate, 
            status, 
            typeRequest,
            term,
            proofOfSalary: proofOfSalaryURL,
            utilityReceipt: utilityReceiptURL,
            afpAccountStatement: afpAccountStatementURL,
            license: licenseURL,
            personalEmploymentReferences,
            copiesIvaIncome: copiesIvaIncomeURL
        } = req.body;

    try {
        
        const purchaseRequestFinancedUpdated = await purchaseRequestModel.findByIdAndUpdate(
            req.params.id,
            {
                idClient, 
                idCar, 
                name, 
                lastname, 
                email, 
                birthdate, 
                phone, 
                address, 
                photocopyOfDui: photocopyOfDuiURL, 
                paymentMethodOptions, 
                requestDate, 
                status, 
                typeRequest,
                term,
                proofOfSalary: proofOfSalaryURL,
                utilityReceipt: utilityReceiptURL,
                afpAccountStatement: afpAccountStatementURL,
                license: licenseURL,
                personalEmploymentReferences,
                copiesIvaIncome: copiesIvaIncomeURL
            },
            {new: true}
        )

        if(!purchaseRequestFinancedUpdated){
            return res.status(400).json({message: "Purchase request not found"})
        }

        res.status(200).json({message: "Purchase request updated"})

    } catch (error) {
        
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})

    }
}

//DELETE
purchaseRequestController.deletePurchasesRequests = async(req, res) => {

    try {
        
        const deletePurchaseRequest = await purchaseRequestModel.findByIdAndDelete(req.params.id);

        if(!deletePurchaseRequest){
            return res.status(400).json({message: "Purchase request not found"})
        }

        res.status(200).json({message: "Employee deleted"});

    } catch (error) {
        
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})

    }
}

export default purchaseRequestController;