import React from 'react';
import CardBrand from '../components/CardBrand/CardBrand';
import CardCarRent from '../components/CardCarRent/CardCarRent'; // Importar tu componente de card de carros
import useBrands from '../hooks/Brand/useDataBrands';
import useRentalCars from '../hooks/Car/useDataRentalCars'; // Importar el nuevo hook
import './Dashboard.css';

const Dashboard = () => {
  // Usar los hooks personalizados
  const { brands, loading: brandsLoading, error: brandsError, refetch: refetchBrands } = useBrands();
  const { rentalCars, loading: carsLoading, error: carsError, refetch: refetchCars } = useRentalCars();

  const handleBrandClick = (brand) => {
    console.log('Brand selected:', brand.name);
    // Aquí puedes agregar la lógica para manejar la selección de marca
  };

  const handleCarRent = (car) => {
    console.log('Car selected for rent:', car.title);
    // Aquí puedes agregar la lógica para el proceso de alquiler
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

      {/* Brands Section - Full Width */}
      <section className="brands-section">
        <h2 className="section-title">Nuestras marcas</h2>
        
        {brandsLoading && (
          <div className="loading-container">
            <p>Cargando marcas...</p>
          </div>
        )}
        
        {brandsError && (
          <div className="error-container">
            <p>Error al cargar las marcas: {brandsError}</p>
            <button 
              onClick={refetchBrands}
              className="retry-btn"
            >
              Reintentar
            </button>
          </div>
        )}
        
        {!brandsLoading && !brandsError && (
          <div className="brands-grid-centered">
            {brands.map((brand) => (
              <CardBrand
                key={brand._id || brand.id}
                logoSrc={brand.logo}
                logoAlt={brand.name}
                onClick={() => handleBrandClick(brand)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Rental Cars Section */}
      <section className="rental-cars-section">
        <div className="additional-content">
          <h2 className="section-title">Carros Disponibles para Alquiler</h2>
          
          {carsLoading && (
            <div className="loading-container">
              <p>Cargando carros disponibles...</p>
            </div>
          )}
          
          {carsError && (
            <div className="error-container">
              <p>Error al cargar los carros: {carsError}</p>
              <button 
                onClick={refetchCars}
                className="retry-btn"
              >
                Reintentar
              </button>
            </div>
          )}
          
          {!carsLoading && !carsError && (
            <>
              {rentalCars.length === 0 ? (
                <div className="no-cars-container">
                  <p>No hay carros disponibles para alquiler en este momento.</p>
                </div>
              ) : (
                <div className="rental-cars-grid">
                  {rentalCars.map((car) => (
                    <CardCarRent
                      key={car._id || car.id}
                      title={car.title}
                      images={car.images}
                      carTransmission={car.carTransmission}
                      fuelType={car.fuelType}
                      passengerCapacity={car.passengerCapacity}
                      typeVehicle={car.typeVehicle}
                      radio={car.radio}
                      airConditioning={car.airConditioning}
                      deposit={car.deposit}
                      rentalCostPerDay={car.rentalCostPerDay}
                      traction={car.traction}
                      rims={car.rims}
                      mileage={car.mileage}
                      engine={car.engine}
                      color={car.color}
                      onRentClick={() => handleCarRent(car)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;