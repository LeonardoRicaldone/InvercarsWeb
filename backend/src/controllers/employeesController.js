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

    try {
        
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

    //Guardar todo en la base de datos
    const newEmployee = new employeesModel({name, lastname, email, password, birthday, photo: photoURL})

    newEmployee.save();

    res.status(200).json({message: "Employee saved"})

    } catch (error) {
        
        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})

    }

}

//UPDATE
employeesController.updateEmployees = async(req, res) => {

    //1- Pido las cosas
    const { name, lastname, email, password, birthday, photo: photoURL } = req.body;

    try {
        
        const employeeUpdated = await employeesModel.findByIdAndUpdate(
            req.params.id,
            {name, lastname, email, password, birthday, photo: photoURL},
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