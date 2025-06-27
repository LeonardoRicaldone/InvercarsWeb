import React from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css"
import ProfilePhoto from "../images/ibtj.jpg"
import { LuUpload } from "react-icons/lu";

const Profile = () => {
  return (  
    <div className="profile-container">
      <div className="profile-left">

        <div className="name-input-group">
          <input 
            type="text" 
            placeholder="Nombre"
            defaultValue="Invercars"
            className="name-input"
          />
        </div>
        
        <div className="lastname-input-group">
          <input 
            type="text" 
            placeholder="Apellido"
            defaultValue="2025"
            className="lastname-input"
          />
        </div>

        <div className="pform-container">   
          <div className="pinput-group">
            <input 
              type="email" 
              placeholder="Correo electrónico"
              defaultValue="invercars@gmail.com" 
            />
          </div>
          
          <div className="pinput-group">
            <input 
              type="password" 
              placeholder="Contraseña" 
              defaultValue="Invercars2025"
            />
          </div>

          <div className="pinput-group">
            <input 
              type="date" 
              placeholder="Fecha de nacimiento" 
            />
          </div>

          <button className="profile-button">Guardar Cambios</button>

        </div>
      </div>

      <div className="profile-right">
        <div className="image-container">
        <img src={ProfilePhoto} alt="Fotoperfil" className="profile-img" />
        <Link to="#" className="upload-btn"><LuUpload/></Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
