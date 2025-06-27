import React from 'react';
import { Heart, Users, Fuel, Settings, Car, Wind, DollarSign, CreditCard } from 'lucide-react';

const CardCarRent = ({
  title,
  images,
  carTransmission,
  fuelType,
  passengerCapacity,
  typeVehicle,
  radio,
  airConditioning,
  deposit,
  rentalCostPerDay,
  traction,
  rims,
  mileage,
  engine,
  color
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Manejar imágenes (puede ser string o array)
  const imageArray = Array.isArray(images) ? images : [images];
  const currentImage = imageArray[currentImageIndex] || 'https://via.placeholder.com/400x200/e5e5e5/666666?text=Sin+Imagen';

  const handleNextImage = () => {
    if (imageArray.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
    }
  };

  const handlePrevImage = () => {
    if (imageArray.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm border border-gray-100">
      {/* Header con imagen */}
      <div className="relative">
        <img 
          src={currentImage}
          alt={title || 'Vehículo'}
          className="w-full h-48 object-cover bg-gray-100"
          onError={(e) => {
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
          }}
        />
        
        {/* Rating badge */}
        <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg flex items-center">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-sm font-medium">4.8</span>
        </div>

        {/* Favorite button */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all shadow-sm"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>

        {/* Image navigation dots */}
        {imageArray.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {title || 'Vehículo Disponible'}
        </h3>

        {/* Main features */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="flex flex-col items-center text-center">
            <Settings className="w-4 h-4 mb-1" style={{ color: '#2D56A8' }} />
            <span className="text-xs text-gray-600 leading-tight">
              {carTransmission || 'N/A'}
            </span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <Fuel className="w-4 h-4 mb-1" style={{ color: '#2D56A8' }} />
            <span className="text-xs text-gray-600 leading-tight">
              {fuelType || 'N/A'}
            </span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <Users className="w-4 h-4 mb-1" style={{ color: '#2D56A8' }} />
            <span className="text-xs text-gray-600 leading-tight">
              {passengerCapacity || 0} asientos
            </span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <Car className="w-4 h-4 mb-1" style={{ color: '#2D56A8' }} />
            <span className="text-xs text-gray-600 leading-tight">
              {typeVehicle || 'N/A'}
            </span>
          </div>
        </div>

        {/* Additional features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {airConditioning && (
            <div className="flex items-center text-white px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#2D56A8' }}>
              <Wind className="w-3 h-3 mr-1" />
              A/C
            </div>
          )}
          {radio && (
            <div className="text-white px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#2D56A8' }}>
              Radio {radio}
            </div>
          )}
          {color && (
            <div className="text-white px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#2D56A8' }}>
              {color}
            </div>
          )}
        </div>

        {/* Pricing section */}
        <div className="border-t pt-3 space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-600">
              <DollarSign className="w-4 h-4 mr-1" style={{ color: '#2D56A8' }} />
              <span className="text-sm">Por día</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold" style={{ color: '#2D56A8' }}>
                ${rentalCostPerDay || 0}
              </span>
              <span className="text-gray-500 text-sm ml-1">/ Día</span>
            </div>
          </div>
          
          {deposit > 0 && (
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center text-gray-600">
                <CreditCard className="w-4 h-4 mr-1" style={{ color: '#2D56A8' }} />
                <span>Depósito</span>
              </div>
              <span className="font-medium text-gray-800">
                ${deposit}
              </span>
            </div>
          )}
        </div>

        {/* Action button */}
        <button className="w-full mt-4 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200" style={{ backgroundColor: '#2D56A8' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#1E3F7A'} onMouseLeave={(e) => e.target.style.backgroundColor = '#2D56A8'}>
          Alquilar Ahora
        </button>
      </div>

      {/* Additional specs tooltip/expandable (opcional) */}
      {(engine || mileage || traction || rims) && (
        <div className="px-4 pb-3">
          <details className="text-xs text-gray-600">
            <summary className="cursor-pointer hover:text-gray-800 font-medium">
              Ver especificaciones
            </summary>
            <div className="mt-2 space-y-1 pl-2">
              {engine && <div>Motor: {engine}</div>}
              {mileage && <div>Kilometraje: {mileage.toLocaleString()} km</div>}
              {traction && <div>Tracción: {traction}</div>}
              {rims && <div>Rines: {rims}</div>}
            </div>
          </details>
        </div>
      )}
    </div>
  );
};

export default CardCarRent;