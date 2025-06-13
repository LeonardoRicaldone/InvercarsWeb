// Importo todo lo de la librería de Express
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import employeesRoutes from "./src/routes/employees.js"
import brandsRoutes from "./src/routes/brands.js"

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

//Exporto la constante para poder usar express en otros archivos
export default app;