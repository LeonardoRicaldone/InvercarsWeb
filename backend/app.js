//express es un servidor que me dara una red

//importo todo lo de la libreria de express
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import employeesRoutes from "./src/routes/employees.js"
import brandsRoutes from "./src/routes/brands.js"
import clientesRoutes from "./src/routes/clients.js"
import carsRoutes from "./src/routes/cars.js"
import financingRoutes from "./src/routes/financing.js"
import modelsRoutes from "./src/routes/models.js"
import orderCarsRoutes from "./src/routes/orderCars.js"
import purchaseRequestRoutes from "./src/routes/purchaseRequest.js"
import rentalApplicationRoute from "./src/routes/rentalApplication.js";

//crear constante que es igual a la libreria que importe
const app = express();

//usamos cors
app.use(
    cors({
    origin: "http://localhost:5173",
    credentials: true,
}))


//Que acepte datos de json
app.use(express.json());
//Que postman acepte guardar cookies
app.use(cookieParser())


app.use("/api/employees", employeesRoutes)
app.use("/api/brands", brandsRoutes)
app.use("/api/clients", clientesRoutes)
app.use("/api/cars", carsRoutes)
app.use("/api/financing", financingRoutes)
app.use("/api/models", modelsRoutes)
app.use("/api/ordercars", orderCarsRoutes)
app.use("/api/purchaseRequests", purchaseRequestRoutes)
app.use("/api/rentalApplications", rentalApplicationRoute)

//Exporto la constante para poder usar express en otros archivos
export default app;
