import React from "react";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";
import InverLogo from "../images/inverwel.png";
import WelWallPaper from "../images/Welcomewallpaper.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={WelWallPaper} alt="Fondo" className="welbackground-image" />

      <div className="welcome-content">
        <img src={InverLogo} alt="Logo Invercars" className="logoinverwel" />
        <h1>BIENVENIDO</h1>
        <p>TU ELIGES EL DESTINO</p>

        <Link className="welcome-button" to="/login">Comenzar </Link>
        
      </div>
    </div>
  );
};

export default Welcome;
