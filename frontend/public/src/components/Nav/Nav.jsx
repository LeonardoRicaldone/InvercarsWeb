import React, { useState } from 'react';
import { ChevronDown, Search, Heart, User } from 'lucide-react';
import './Nav.css';

const Nav = () => {
  const [showVehiculos, setShowVehiculos] = useState(false);
  const [showImportar, setShowImportar] = useState(false);

  const handleVehiculosClick = () => {
    console.log('Vehículos clicked!');
    setShowVehiculos(!showVehiculos);
    setShowImportar(false); // Cerrar el otro
  };

  const handleImportarClick = () => {
    console.log('Importar clicked!');
    setShowImportar(!showImportar);
    setShowVehiculos(false); // Cerrar el otro
  };

  console.log('States:', { showVehiculos, showImportar });

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo-container">
            <img 
              src="/isoinver.png" 
              alt="Logo" 
              className="logo-image"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#" className="nav-link">Inicio</a>
          
          {/* Vehículos Dropdown */}
          <div className="nav-dropdown">
            <button 
              className="nav-link dropdown-toggle"
              onClick={handleVehiculosClick}
              type="button"
            >
              Vehículos <ChevronDown className="chevron-icon" />
            </button>
            {showVehiculos && (
              <div className="dropdown-menu" style={{display: 'block'}}>
                <a href="#" className="dropdown-item">En Venta</a>
                <a href="#" className="dropdown-item">En Alquiler</a>
              </div>
            )}
          </div>

          {/* Importar vehículos Dropdown */}
          <div className="nav-dropdown">
            <button 
              className="nav-link dropdown-toggle"
              onClick={handleImportarClick}
              type="button"
            >
              Importar vehículos <ChevronDown className="chevron-icon" />
            </button>
            {showImportar && (
              <div className="dropdown-menu" style={{display: 'block'}}>
                <a href="#" className="dropdown-item">Solicitar</a>
                <a href="#" className="dropdown-item">Proceso</a>
              </div>
            )}
          </div>

          <a href="#" className="nav-link">Mis alquilos</a>
          <a href="#" className="nav-link">Sobre nosotros</a>
        </div>

        {/* Search and User Actions */}
        <div className="nav-actions">
          <div className="search-container">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar" 
              className="search-input"
            />
          </div>
          
          <button className="action-btn">
            <Heart className="action-icon" />
          </button>
          
          <button className="action-btn">
            <User className="action-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;