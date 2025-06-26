import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/PasswordRecovery.css"
import PassCar from "../images/PassCar.png";
import InverLogo from "../images/Invercarslogo.png";

const PasswordRecovery = () => {

  const navigate = useNavigate();

  const handlePassRecoveryClick = () => {
    navigate("/verifycode");
  };

  return (
    <div className="pass-container">
      <div className="pass-left">
        <h1>Recupera tu contraseña</h1>
        <p>Ingresa tu correo para que podamos enviarte el código de verificación:</p>

        <div className="form-container">
  <div className="input-group">
    <input type="email" placeholder="Correo electrónico" />
  </div>

  <button className="pass-button" onClick={handlePassRecoveryClick}>Siguiente</button>

</div>
      </div>

      <div className="pass-right">
        <img src= "https://i.pinimg.com/736x/b3/9b/e8/b39be86108f0e6aac47db2d2a533d086.jpg" alt="Fondo" className="passbackground-image" />

        <img src={PassCar} alt="Carro" className="passcar-image" />

        <img src={InverLogo} alt="Logo Invercars" className="passlogo-invercars" />
      </div>
    </div>
  );
};

export default PasswordRecovery;
