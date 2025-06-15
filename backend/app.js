// Importo todo lo de la librería de Express
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import employeesRoutes from "./src/routes/employees.js"
import brandsRoutes from "./src/routes/brands.js"
import clientesRoutes from "./src/routes/clients.js"
import carsRoutes from "./src/routes/cars.js"
import financingRoutes from "./src/routes/financing.js"
import modelsRoutes from "./src/routes/models.js"
import orderCarsRoute from "./src/routes/orderCars.js"

//Creo una constante que es igual a la librería que importé
const app = express();

/*app.use(
    cors({
      origin: "https://zona-digital-mern-6ycb.vercel.app",
      // Permitir envío de cookies y credenciales
      credentials: true
    })
);*/

//Que acepte datos en json
app.use(express.json());

//Que postman acepte guardar cookies
app.use(cookieParser());


//Definimos las rutas de las funciones que tendrá la página web

app.use("/api/employees", employeesRoutes)
app.use("/api/brands", brandsRoutes)
app.use("/api/clients", clientesRoutes)
app.use("/api/cars", carsRoutes)
app.use("/api/financing", financingRoutes)
app.use("/api/models", modelsRoutes)
app.use("/api/ordercars", orderCarsRoute)

//Exporto la constante para poder usar express en otros archivos
export default app;