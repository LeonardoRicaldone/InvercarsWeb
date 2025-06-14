import React from 'react';
import { FaHeart, FaRegHeart, FaCog, FaUserFriends, FaUser } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const carBrands = [
    { name: 'KIA', logo: 'https://logos-world.net/wp-content/uploads/2021/03/Kia-Logo.png' },
    { name: 'Toyota', logo: 'https://logos-world.net/wp-content/uploads/2020/08/Toyota-Logo.png' },
    { name: 'Ford', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Ford-Logo.png' },
    { name: 'Jeep', logo: 'https://logos-world.net/wp-content/uploads/2021/04/Jeep-Logo.png' },
    { name: 'Nissan', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Nissan-Logo.png' },
    { name: 'Chevrolet', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Chevrolet-Logo.png' },
    { name: 'Honda', logo: 'https://logos-world.net/wp-content/uploads/2021/03/Honda-Logo.png' },
    { name: 'Mazda', logo: 'https://logos-world.net/wp-content/uploads/2021/03/Mazda-Logo.png' },
    { name: 'Hyundai', logo: 'https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo.png' },
    { name: 'Mitsubishi', logo: 'https://logos-world.net/wp-content/uploads/2021/03/Mitsubishi-Logo.png' }
  ];

  const popularCars = [
    {
      id: 1,
      name: 'HONDA CIVIC 2020',
      price: '$28,000',
      image: 'https://via.placeholder.com/150x100/333/fff?text=Honda+Civic',
      liked: false
    },
    {
      id: 2,
      name: 'VOLKSWAGEN TIGUAN 2024',
      price: '$35,000',
      image: 'https://via.placeholder.com/150x100/333/fff?text=VW+Tiguan',
      liked: true
    },
    {
      id: 3,
      name: 'HONDA CIVIC 2022',
      price: '$30,000',
      image: 'https://via.placeholder.com/150x100/333/fff?text=Honda+Civic',
      liked: false
    },
    {
      id: 4,
      name: 'VOLKSWAGEN JETTA GLI 2023',
      price: '$32,000',
      image: 'https://via.placeholder.com/150x100/333/fff?text=VW+Jetta',
      liked: true
    }
  ];

  const rentalCar = {
    name: 'BMW M COUPE',
    price: '$200.00 / Día',
    image: 'https://via.placeholder.com/300x200/0066cc/fff?text=BMW+M+Coupe'
  };

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Aquí va tu imagen de fondo */}
        <div className="hero-background">
          {/* Espacio reservado para tu imagen */}
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
          <div className="brands-grid">
            {carBrands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
            ))}
          </div>
        </section>

        {/* Cars Sections */}
        <div className="cars-sections">
          {/* Popular Cars */}
          <section className="cars-section">
            <h2 className="section-title">Carros populares</h2>
            <div className="cars-grid">
              {popularCars.map((car) => (
                <div key={car.id} className="car-card">
                  <div className="car-image-container">
                    <img src={car.image} alt={car.name} className="car-image" />
                    <button className="favorite-btn">
                      {car.liked ? <FaHeart className="heart-filled" /> : <FaRegHeart />}
                    </button>
                  </div>
                  <div className="car-info">
                    <h3 className="car-name">{car.name}</h3>
                    <p className="car-price">{car.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Rental Cars */}
          <section className="cars-section">
            <h2 className="section-title">Carros en alquiler</h2>
            <div className="rental-card">
              <div className="rental-image-container">
                <img src={rentalCar.image} alt={rentalCar.name} className="rental-image" />
              </div>
              <div className="rental-info">
                <h3 className="rental-name">{rentalCar.name}</h3>
                <p className="rental-price">{rentalCar.price}</p>
                <div className="rental-actions">
                  <button className="action-btn">
                    <FaCog />
                  </button>
                  <button className="action-btn">
                    <FaUserFriends />
                  </button>
                  <button className="action-btn">
                    <FaUser />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;