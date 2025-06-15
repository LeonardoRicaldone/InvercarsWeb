import modelsModel from "../models/Models.js"
import brandsModel from "../models/Brands.js"

//Creo un array de funciones vacías
const modelsController = {};

//SELECT
modelsController.getAllModels = async(req, res) => {

    try {
        
        const models = await modelsModel.find().populate('idBrand')
        res.status(200).json(models)

    } catch (error) {
        console.log("error" + error)
        res.status(500).json("Internal server error")
    }
}

//INSERT
modelsController.insertModels = async(req, res) => {

    //1- Pedir los datos
    const { name, idBrand } = req.body;

    try {
    
        //Guardamos todo en la base de datos
        const newModel = new modelsModel({ name, idBrand })

        newModel.save();

        res.status(200).json({message: "Model saved"})

    } catch (error) {
    
        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})

    }
}

//UPDATE
modelsController.updateModels = async(req, res) => {

    //1- Pido las cosas
    const { name, idBrand } = req.body;

    try {
        
        const modelUpdated = await modelsModel.findByIdAndUpdate(
            req.param.id,
            {name, idBrand},
            {new: true}
        )

        if(!modelUpdated){
            return res.status(400).json({message: "Model not found"})
        }

        res.status(200).json({message: "Model updated"})

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

//ELIMINAR
modelsController.deleteModels = async(req, res) => {

    try {
        
        const deleteModel = await modelsModel.findByIdAndDelete(req.params.id);

        if(!deleteModel){
            return res.status(400).json({message: "Model not found"})
        }

        res.status(200).json({message: "Faq deleted"});

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
};

export default modelsController;