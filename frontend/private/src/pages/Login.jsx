import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import LogCar from "../images/Logcar.png";
import InverLogo from "../images/Invercarslogo.png";
import LogWallp from "../images/Loginwallpaper.jpg";
import Fbbtn from "../images/fb.png";
import Glbtn from "../images/gl.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Iniciar sesión</h1>

        <div className="social-buttons">
          <button className="social-btn fb-btn"><img src={Fbbtn} alt="Facebook" /></button>
          <button className="social-btn google-btn"><img src={Glbtn} alt="Google" /></button>
        </div>


        <div className="form-container">
  <div className="input-group">
    <input type="email" placeholder="Correo electrónico" />
  </div>

  <div className="input-group">
    <input type="password" placeholder="Contraseña" />
  </div>

  <div className="forgot-password">
    <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
  </div>

  <button className="login-button">Siguiente</button>

</div>
      </div>

      <div className="login-right">
        <img src={LogWallp} alt="Fondo" className="background-image" />

        <img src={LogCar} alt="Carro" className="car-image" />

        <img src={InverLogo} alt="Logo Invercars" className="logo-invercars" />
      </div>
    </div>
  );
};

export default Login;
