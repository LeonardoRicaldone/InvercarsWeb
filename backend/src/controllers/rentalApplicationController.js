import rentalApplicationModel from '../models/rentalApplicationModel.js';
import { v2 as cloudinary } from 'cloudinary';
import { config } from '../config.js';

//1- Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

//Creo un array de funciones vacías
const rentalApplicationController = {};

//SELECT
rentalApplicationController.getAllRentalApplications = async (req, res) => {

    try {
        const rentalApplications = await rentalApplicationModel.find().populate('idCar').populate('idClient');
        res.status(200).json(rentalApplications);
    } catch (error) {
        console.error("error", error);
        res.status(500).json("Internal server error");
    }

}

//INSERT
rentalApplicationController.insertRentalApplication = async (req, res) => {

    //1- Pedir los datos
    const { idClient, idCar, location, phone, address, email, applicationDate, startDate, endDate, state, paymentMethod } = req.body;

    try {
        //Subir las imágenes a Cloudinary
        let licenseURL = "";
        let duiURL = "";

        if (req.files) {
            if (req.files.license) {
                const licenseResult = await cloudinary.uploader.upload(req.files.license[0].path, {
                    folder: "public",
                    allowed_formats: ["png", "jpg", "jpeg", "webp"]
                });
                licenseURL = licenseResult.secure_url;
            }
            if (req.files.dui) {
                const duiResult = await cloudinary.uploader.upload(req.files.dui[0].path, {
                    folder: "public",
                    allowed_formats: ["png", "jpg", "jpeg", "webp"]
                });
                duiURL = duiResult.secure_url;
            }
        }

        //Guardar todo en la base de datos
        const newRentalApplication = new rentalApplicationModel({
            idClient,
            idCar,
            location,
            photoLicense: licenseURL,
            photoDUI: duiURL,
            phone,
            address,
            email,
            applicationDate,
            startDate,
            endDate,
            state,
            paymentMethod
        });

        await newRentalApplication.save();

        res.status(200).json({ message: "Rental Application saved" });

    } catch (error) {
        console.error("ERROR insertRentalApplication:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//UPDATE
rentalApplicationController.updateRentalApplication = async (req, res) => {

    //1- Pido las cosas
    const { idClient, idCar, location, photoLicense: licenseURL, photoDUI: duiURL, phone, address, email, startDate, endDate, state, paymentMethod } = req.body;

    try {
        const rentalApplicationUpdated = await rentalApplicationModel.findByIdAndUpdate(
            req.params.id,
            { idClient, idCar, location, photoLicense: licenseURL, photoDUI: duiURL, phone, address, email, startDate, endDate, state, paymentMethod },
            { new: true }
        );

        if (!rentalApplicationUpdated) {
            return res.status(400).json({ message: "Rental Application not found" });
        }

        return res.status(200).json({ message: "Rental Application updated" });

    } catch (error) {

        console.error("ERROR updateRentalApplication:", error);
        return res.status(500).json({ message: "Internal server error" });

    }
}

//DELETE
rentalApplicationController.deleteRentalApplication = async (req, res) => {

    try {

        const deleteRentalApplication = await rentalApplicationModel.findByIdAndDelete(req.params.id);

        if (!deleteRentalApplication) {
            return res.status(400).json({ message: "Rental Application not found" });
        }

        res.status(200).json({ message: "Rental Application deleted" });

    } catch (error) {

        console.error("ERROR deleteRentalApplication:", error);
        return res.status(500).json({ message: "Internal server error" });

    }
}

export default rentalApplicationController;