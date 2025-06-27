import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/VerifyCode.css"
import VerifyCar from "../images/VerifyCar.png";
import InverLogo from "../images/Invercarslogo.png";
import VeryWallp from "../images/Verifywallp.jpg";

const VerifyCode = () => {

  const navigate = useNavigate();

  const handleVerifyCodeClick = () => {
    navigate("/resetpassword");
  };

  return (  

    <div className="verify-container">

        <div className="verify-left">

        <img src={VeryWallp} alt="Fondo" className="background-img" />

        <img src={VerifyCar} alt="Carro" className="car-img" />

        <img src={InverLogo} alt="Logo Invercars" className="vlogo-invercars" />

      </div>

      <div className="verify-right">

        <h1>Verificar código</h1>

        <p>Ingresa el código que hemos enviado a tu correo electrónico:</p>

        <div className="form-container">

        <div className="input-code">

            <input type="text" placeholder="XXXXX" />

        </div>

        <button className="verify-button" onClick={handleVerifyCodeClick}>Verificar</button>

        </div>
      </div>
    </div>
  );
};

export default VerifyCode;