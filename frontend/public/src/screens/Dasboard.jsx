import React from 'react';
import CardBrand from '../components/CardBrand/CardBrand'; // Asegúrate de importar tu componente
import useBrands from '../hooks/Brand/useDataBrands'; // Importar el hook personalizado
import './Dashboard.css';

const Dashboard = () => {
  // Usar el hook personalizado
  const { brands, loading, error, refetch } = useBrands();

  const handleBrandClick = (brand) => {
    console.log('Brand selected:', brand.name);
    // Aquí puedes agregar la lógica para manejar la selección de marca
  };

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero-section-full">
        <div className="hero-background">
          {/* Aquí va tu imagen de fondo */}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenido a Inversecars, donde tu próxima aventura sobre ruedas comienza hoy.
          </h1>
          <p className="hero-subtitle">
            "Tu eliges el destino"
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        {/* Brands Section */}
        <section className="brands-section">
          <h2 className="section-title">Nuestras marcas</h2>
          
          {loading && (
            <div className="loading-container">
              <p>Cargando marcas...</p>
            </div>
          )}
          
          {error && (
            <div className="error-container">
              <p>Error al cargar las marcas: {error}</p>
              <button 
                onClick={refetch}
                className="retry-btn"
              >
                Reintentar
              </button>
            </div>
          )}
          
          {!loading && !error && (
            <div className="brands-grid-centered">
              {brands.map((brand) => (
                <CardBrand
                  key={brand._id || brand.id} // Usa el ID de MongoDB o el que tengas
                  logoSrc={brand.logo}
                  logoAlt={brand.name}
                  onClick={() => handleBrandClick(brand)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;