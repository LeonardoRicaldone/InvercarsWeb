import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css"
import RegCar from "../images/RegCar.png";
import InverLogo from "../images/Inverw.png";
import RegWallPaper from "../images/RegWallPaper.png";

const Register = () => {
  return (
    <div className="register-container">

        <div className="register-right">

        <img src={RegWallPaper} alt="Fondo" className="regbackground-image" />
        <img src={RegCar} alt="Carro" className="car" />
        <img src={InverLogo} alt="Logo Invercars" className="logoinverw" />

        </div>
      
      <div className="register-left">
        <h1>Registrate</h1>


<div className="form-container">

  <div className="input-group">
    <input type="text" placeholder="Nombre" />
  </div>

  <div className="input-group">
    <input type="text" placeholder="Apellido" />
  </div>

  <div className="input-group">
    <input type="date" placeholder="Fecha de nacimiento" />
  </div>

  <div className="input-group">
    <input type="email" placeholder="Correo electrónico" />
  </div>

  <div className="input-group">
    <input type="password" placeholder="Contraseña" />
  </div>

  <button className="register-button">Registrarme</button>

  <div className="login-text">
    <span>¿Ya tienes una cuenta? </span>
    <Link to="/login" className="login-link">Iniciar Sesión</Link>
  </div>

</div>
      </div>

    </div>
  );
};

export default Register;
