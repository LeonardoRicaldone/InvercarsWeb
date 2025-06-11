import React from "react";
import { Link } from "react-router-dom";
import "./VerifyCode.css"
import VerifyCar from "../images/VerifyCar.png";
import InverLogo from "../images/Inverw.png";
import Verifywallp from "../images/Verifywallp.jpg";

const VerifyCode = () => {
  return (
    <div className="verify-container">

        <div className="verify-right">

        <img src={Verifywallp} alt="Fondo" className="verbackground-image" />
        <img src={VerifyCar} alt="Carro" className="vercar" />
        <img src={InverLogo} alt="Logo Invercars" className="logoinverw" />

        </div>
      
      <div className="verify-left">
        <h1>Verificación de código</h1>


<div className="form-container">

  <div className="input-group">
    <input type="number" placeholder="XXXX" />
  </div>

  <button className="verify-button">Verifucar</button>


</div>
      </div>

    </div>
  );
};

export default VerifyCode;
