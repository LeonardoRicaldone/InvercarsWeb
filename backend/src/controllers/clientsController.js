import clientsModel from "../models/Clients.js"

//Creo un array de funciones vacías 
const clientsController = {};

//SELECT
clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find()
    res.json(clients)
}

//INSERT
clientsController.insertClients = async(req, res) => {

    //1- Pedir los datos
    const { name, lastname, birthdate, email, password, photo, offerLevel } = req.body;

    try {

        //Guardamos todo en la base de datos
        const newClient = new clientsModel({ name, lastname, birthdate, email, password, photo, offerLevel })

        newClient.save();

        res.status(200).json({message: "Client saved"})
        

         
    } catch (error) {

        console.log("error" + error)
        res.status(500).json({message: "Internal server error"})
        
    }
}

//Agregar carros a favoritos
clientsController.addFavoriteCar = async (req, res) => {
    const { userId, idCar } = req.body;
   
    try {
  //Primero, obtendo que usuario es en base a su ID
      const user = await clientsModel.findById(userId);
   
      // Agregar nuevo carro favorito al array de favorites
      user.favorites.push({idCar});
      await user.save();
   
      res.status(200).json({ message: 'Carro agregado a favoritos', user });
    } catch (error) {
      res.status(500).json({ message: 'Error del servidor', error });
    }
};

export default clientsController;