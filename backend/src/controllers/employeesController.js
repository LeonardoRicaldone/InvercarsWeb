import employeesModel from "../models/Employees.js"
import { v2 as cloudinary } from "cloudinary"

//BAJO OBSERVACION
import { config } from "../config.js"

//1- Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

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
    const { name, lastname, email, password, birthdate } = req.body;
    let photoURL = ""

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
        photoURL = result.secure_url
    }

    //Guardar todo en la base de datos
    const newEmployee = new employeesModel({name, lastname, email, password, birthdate, photo: photoURL})

    newEmployee.save();

    res.status(200).json({message: "Employee saved"})

    } catch (error) {
        console.error("ERROR insertEmployees:", error);
        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})

    }

}

//UPDATE
employeesController.updateEmployees = async(req, res) => {

    //1- Pido las cosas
    const { name, lastname, email, password, birthdate, photo: photoURL } = req.body;

    try {
        
        const employeeUpdated = await employeesModel.findByIdAndUpdate(
            req.params.id,
            {name, lastname, email, password, birthdate, photo: photoURL},
            {new: true}
        )

        if(!employeeUpdated){
            return res.status(400).json({message: "Employee not found"})
        }

        res.status(200).json({message: "Employee updated"})

    } catch (error) {

        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})

    }
}

//DELETE
employeesController.deleteEmployees = async (req, res) => {

    try {
        
        const deleteEmployee = await employeesModel.findByIdAndDelete(req.params.id);

        if(!deleteEmployee){
            return res.status(400).json({message: "Employee not found"})
        }

        res.status(200).json({message: "Employee deleted"});

    } catch (error) {

        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
        
    }
}

export default employeesController;

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