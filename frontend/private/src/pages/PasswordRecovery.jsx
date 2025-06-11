import React from "react";
import { Link } from "react-router-dom";
import "./PasswordRecovery.css"
import PassCar from "../images/PassCar.png";
import InverLogo from "../images/Invercarslogo.png";
import PassWallp from "../images/Passwallpaper.png";

const PasswordRecovery = () => {
  return (
    <div className="pass-container">
      <div className="pass-left">
        <h1>Recupera tu contraseña</h1>
        <p>Ingresa tu correo para que podamos enviarte el código de verificación</p>

        <div className="form-container">
  <div className="input-group">
    <input type="email" placeholder="Correo electrónico" />
  </div>

  <button className="pass-button">Siguiente</button>

</div>
      </div>

      <div className="pass-right">
        <img src={PassWallp} alt="Fondo" className="passbackground-image" />

        <img src={PassCar} alt="Carro" className="passcar-image" />

        <img src={InverLogo} alt="Logo Invercars" className="passlogo-invercars" />
      </div>
    </div>
  );
};

export default PasswordRecovery;
