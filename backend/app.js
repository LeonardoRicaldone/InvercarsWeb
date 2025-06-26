//express es un servidor que me dara una red

//importo todo lo de la libreria de express
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


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

//Definir las rutas de las funciones que tendra la pagina web



//exporto la constante para poder usar express en otros archivos
export default app;
//ESCRIBIR UNA LINEA ADICIONAL EN EL package.json hasta arriba   [  "type": "module",  ] es la linea y tambien en scripts "dev": "nodemon index.js"
