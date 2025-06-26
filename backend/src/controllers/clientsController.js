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

//UPDATE
clientsController.updateClients = async(req, res) => {

    //1- Pido las cosas
    const { name, lastname, birthdate, email, password, photo, offerLevel } = req.body;

    try {
        
        const clientUpdated = await clientsModel.findByIdAndUpdate(
            req.params.id,
            {name, lastname, birthdate, email, password, photo, offerLevel},
            {new: true}
        )

        if(!clientUpdated){
            return res.status(400).json({message: "Client not found"})
        }

        return res.status(400).json({message: "Client updated"})

    } catch (error) {

        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})

    }
}

//ELIMINAR
clientsController.deleteClients = async(req, res) => {

    try {
        
        const deleteClient = await clientsModel.findByIdAndDelete(req.params.id);

        if(!deleteClient){
            return res.status(400).json({message: "Client not found"})
        }

        res.status(200).json({message: "Client deleted"});

    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
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

//Agregar carros vistos al historial
clientsController.addHistoryCar = async (req, res) => {
    const { userId, idCar } = req.body;
   
    try {
  //Primero, obtendo que usuario es en base a su ID
      const user = await clientsModel.findById(userId);
   
      // Agregar el carro visto al historial
      user.history.push({idCar});
      await user.save();
   
      res.status(200).json({ message: 'Carro agregado al historial', user });
    } catch (error) {
      res.status(500).json({ message: 'Error del servidor', error });
    }
};

export default clientsController;