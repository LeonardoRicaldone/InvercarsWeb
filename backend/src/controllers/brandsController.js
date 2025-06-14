import brandsModel from "../models/Brands.js"
import { v2 as cloudinary } from "cloudinary"

import { config } from "../config.js"

//1- Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

//Creo un array de funciones vacías
const brandsController = {};

//SELECT
brandsController.getAllBrands = async(req, res) => {

    try {
        const brands = await brandsModel.find()
        res.status(200).json(brands)

    } catch (error) {
        console.log("error" + error)
        res.status(500).json("Internal server error")       
    }

}

//INSERT
brandsController.insertBrands = async(req, res) => {

    //1- Pedir los datos
    const { name } = req.body;
    let logoURL = ""

    try {
        
        //Subir la imagen a Cloudinary
        if(req.file){
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: "public",
                    allowed_formats: ["png", "jpg", "jpeg", "webp"]
                }
            )
            //Guardo en la variable la URL de donde se subió la imagen
            logoURL = result.secure_url
        }

        //Guardar todo en la base de datos
        const newBrand = new brandsModel({name, logo: logoURL})

        newBrand.save()

        res.status(200).json({message: "Brand saved"})


    } catch (error) {
        
        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})

    }
}

//UPDATE
brandsController.updateBrands = async(req, res) => {

    //1- Pido las cosas
    const { name, logo: logoURL} = req.body;

    try {
        
        const brandUpdated = await brandsModel.findByIdAndUpdate(
            req.params.id,
            {name, logo: logoURL},
            {new: true}
        )

        if(!faqsUpdated){
            return res.status(400).json({message: "Brand not found"})
        }

        res.status(200).json({message: "Brand updated"})

    } catch (error) {
        
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})

    }
}

///DELETE
brandsController.deleteBrands = async(req, res) => {

    try {
        
        const deleteBrand = await brandsModel.findByIdAndDelete(req.params.id);

        if(!deleteBrand){
            return res.status(400).json({message: "Brand not found"})
        }

        res.status(200).json({message: "Faq deleted"});

    } catch (error) {

        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
        
    }
}

export default brandsController;