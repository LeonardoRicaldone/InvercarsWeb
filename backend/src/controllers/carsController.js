import carsModel from "../models/Cars.js"
import modelsModel from "../models/Models.js"
import { v2 as cloudinary } from "cloudinary"

import { config } from "../config.js"

//1- Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

//Creo un array de funciones vacias
const carsController = {};

//SELECT
carsController.getAllCars = async(req, res) => {

    try {
        const cars = await carsModel.find().populate('idModel')
        res.status(200).json(cars)

    } catch (error) {
        console.log("error" + error)
        res.status(500).json("Internal server error")
    }
}

//INSERT
carsController.insertCars = async (req, res) => {

    const {
      idModel,
      description,
      year,
      licensePlate,
      carTransmission,
      fuelType,
      passengerCapacity,
      typeVehicle,
      radio,
      airConditioning,
      traction,
      rims,
      mileage,
      engine,
      color,
      serialNumber,
      state,
      commercialUse,
      rentalCostPerDay,
      purchasePrice,
      deposit,
      acquisitionDate,
    } = req.body;
  
    try {
      let imagesArray = [];
  
      // Validar que no se excedan 5 imágenes
      if (req.files && req.files.length > 5) {
        return res.status(400).json({ message: "Máximo 5 imágenes permitidas." });
      }
  
      // Subir imágenes a Cloudinary si existen
      if (req.files && req.files.length > 0) {
        const uploadPromises = req.files.map((file) =>
          cloudinary.uploader.upload(file.path, {
            folder: "public",
            allowed_formats: ["png", "jpg", "jpeg", "webp"],
          })
        );
  
        const results = await Promise.all(uploadPromises);
  
        imagesArray = results.map((result) => ({
          image: result.secure_url,
        }));
      }
  
      // Crear el nuevo carro
      const newCar = new carsModel({
        idModel,
        description,
        year,
        licensePlate,
        images: imagesArray,
        carTransmission,
        fuelType,
        passengerCapacity,
        typeVehicle,
        radio,
        airConditioning,
        traction,
        rims,
        mileage,
        engine,
        color,
        serialNumber,
        state,
        commercialUse,
        rentalCostPerDay,
        purchasePrice,
        deposit,
        acquisitionDate,
      });
  
      await newCar.save();
  
      res.status(200).json({ message: "Car saved" });

    } catch (error) {

      console.log("error: " + error);
      res.status(500).json({ message: "Internal server error" });

    }
};

//UPDATE
carsController.updateCars = async(req, res) => {

    //1- Pido las cosas
    const {
        idModel,
        description,
        year,
        licensePlate,
        images: imagesArray,
        carTransmission,
        fuelType,
        passengerCapacity,
        typeVehicle,
        radio,
        airConditioning,
        traction,
        rims,
        mileage,
        engine,
        color,
        serialNumber,
        state,
        commercialUse,
        rentalCostPerDay,
        purchasePrice,
        deposit,
        acquisitionDate,
      } = req.body;

    try {

        const carUpdated = await carsModel.findByIdAndUpdate(
            req.params.id,
            {   idModel,
                description,
                year,
                licensePlate,
                images: imagesArray,
                carTransmission,
                fuelType,
                passengerCapacity,
                typeVehicle,
                radio,
                airConditioning,
                traction,
                rims,
                mileage,
                engine,
                color,
                serialNumber,
                state,
                commercialUse,
                rentalCostPerDay,
                purchasePrice,
                deposit,
                acquisitionDate},
            {new: true}
        )
        
        if(!carUpdated){
            return res.status(400).json({message: "Car not found"})
        }

        res.status(200).json({message: "Car updated"})

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
};

//ELIMINAR
carsController.deleteCars = async(req, res) => {

    try {
        
        const deleteCar = await carsModel.findByIdAndDelete(req.params.id);

        if(!deleteCar){
            return res.status(400).json({message: "Car not found"})
        }

        res.status(200).json({message: "Car deleted"});

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}

//Agregar ofertas a carros
carsController.addOfferCar = async(req, res) => {

  const { carId, percentage, level } = req.body;

  try {
    
      //Primero, obtendo que carro es en base a su ID
      const car = await carsModel.findById(carId);

      //Agregar oferta al array de ofertas del carro
      car.offer.push({percentage, level})
      await car.save();

      res.status(200).json({ message: 'Oferta agregado al carro', car });
      
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor', error });
  }
}

// Actualización del método getRentalCars en carsController.js
carsController.getRentalCars = async (req, res) => {
  try {
    const filter = { commercialUse: 'Alquiler' };
    
    // Populate más profundo para obtener modelo y marca
    const cars = await carsModel.find(filter)
      .populate({
        path: 'idModel',
        populate: {
          path: 'idBrand', // Asumiendo que en tu modelo Models tienes una referencia a Brand
          select: 'name logo' // Solo seleccionar nombre y logo de la marca
        }
      })
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: cars,
      count: cars.length
    });
    
  } catch (error) {
    console.error('Error fetching rental cars:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener los carros de alquiler',
      error: error.message
    });
  }
};

export default carsController;