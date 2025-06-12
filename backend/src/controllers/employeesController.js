import employeesModel from "../models/Employees.js"
import { v2 as cloudinary } from "cloudinary"

//Creo un array de funciones vacías
const employeesController = {};

//SELECT
employeesController.getAllEmployees = async(req, res) => {

    try {
        const employees = await employeesModel.find()
        res.status(200).json(employees)
    } catch (error) {
        console.log("error" + error)
        res.status(500).json("Internal server error")
    }
}

//INSERT
employeesController.insertEmployees = async(req, res) => {

    //1- Pedir los datos
    const { name, lastname, email, password, birthday } = req.body;
    let photoURL = ""

    //Subir la imagen a Cloudinary
    if(req.file){
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg"]
            }
        )
        //Guardo en la variable la URL de donde se subió la imagen
        photoURL = result.secure_url
    }

    
}

/*
name: {
    type: String,
    require: true
},
lastname: {
    type: String,
    require: true
},
email: {
    type: String,
    require: true,
},
password: {
    type: String,
    require: true,
    min: 8
},
birthdate: {
    type: Date,
    require: true,
    min: 0
},
photo: {
    type: String,
    require: false
}
*/