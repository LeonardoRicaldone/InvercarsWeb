import React from "react";
import { Link } from "react-router-dom";
import "./ResetPassword.css"
import ResCar from "../images/ResetCar.png";
import InverLogo from "../images/Invercarslogo.png";
import ResWallp from "../images/ResetPasswordwallpaper.jpg";

const ResetPassword = () => {
  return (
    <div className="res-container">
      <div className="res-left">
        <h1>Reestablece tu contraseña</h1>

        <p>Ingresa tu nueva contraseña</p>

        <div className="form-container">
  <div className="input-group">
    <input type="password" placeholder="Contraseña" />
  </div>
  
  <p>Ingresa nuevamente tu contraseña</p>

  <div className="input-group">
    <input type="password" placeholder="Contraseña" />
  </div>

  <button className="res-button">Aceptar</button>

</div>
      </div>

      <div className="res-right">
        <img src={ResWallp} alt="Fondo" className="ressbackground-image" />

        <img src={ResCar} alt="Carro" className="rescar-image" />

        <img src={InverLogo} alt="Logo Invercars" className="reslogo-invercars" />
      </div>
    </div>
  );
};

export default ResetPassword;
