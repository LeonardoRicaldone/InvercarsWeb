import React from 'react';
import { Heart, Users, Fuel, Settings, Car, Wind, DollarSign, FileText } from 'lucide-react';

const CardCarRent = ({
  title,
  brandName,
  modelName,
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
  color,
  onRentClick
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Extraer las URLs de las imágenes correctamente
  const imageArray = Array.isArray(images) && images.length > 0 
    ? images.map(img => img.image).filter(url => url)
    : ['https://via.placeholder.com/400x200/e5e5e5/666666?text=Sin+Imagen'];

  const currentImage = imageArray[currentImageIndex];
  const displayTitle = title || (brandName && modelName ? `${brandName} ${modelName}` : 'Vehículo Disponible');

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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 w-full">
      {/* Header con imagen más compacta */}
      <div className="relative">
        <img 
          src={currentImage}
          alt={displayTitle}
          className="w-full h-44 object-cover bg-gray-100"
          onError={(e) => {
            console.log('Error loading image:', e.target.src);
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
          }}
        />
        
        {/* Rating badge */}
        <div className="absolute top-2 left-2 bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-lg flex items-center backdrop-blur-sm">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-xs font-medium">4.8</span>
        </div>

        {/* Favorite button */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 p-1.5 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all shadow-sm backdrop-blur-sm"
        >
          <Heart 
            className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>

        {/* Image navigation dots */}
        {imageArray.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-3">
        {/* Title y Precio en la misma línea - más compacto */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-semibold text-gray-900 truncate flex-1 mr-2">
            {displayTitle}
          </h3>
          <div className="text-right flex-shrink-0">
            <span className="text-xl font-bold text-blue-600">
              ${rentalCostPerDay || 0}
            </span>
            <span className="text-gray-500 text-xs ml-1">/ Día</span>
          </div>
        </div>

        {/* Main features en una fila horizontal con botones a la derecha - más compacto */}
        <div className="flex justify-between items-center gap-1.5 mb-2">
          {/* Especificaciones */}
          <div className="flex gap-1.5 flex-1">
            <div className="flex items-center justify-center p-1.5 bg-blue-50 rounded-lg min-w-0 flex-1">
              <Settings className="w-3 h-3 mr-1" style={{ color: '#2D56A8' }} />
              <span className="text-xs text-gray-600 truncate">
                {carTransmission || 'Auto'}
              </span>
            </div>
            
            <div className="flex items-center justify-center p-1.5 bg-blue-50 rounded-lg min-w-0 flex-1">
              <Fuel className="w-3 h-3 mr-1" style={{ color: '#2D56A8' }} />
              <span className="text-xs text-gray-600 truncate">
                {fuelType || 'Gas'}
              </span>
            </div>
            
            <div className="flex items-center justify-center p-1.5 bg-blue-50 rounded-lg min-w-0 flex-1">
              <Users className="w-3 h-3 mr-1" style={{ color: '#2D56A8' }} />
              <span className="text-xs text-gray-600 truncate">
                {passengerCapacity || 4}
              </span>
            </div>
            
            <div className="flex items-center justify-center p-1.5 bg-blue-50 rounded-lg min-w-0 flex-1">
              <Car className="w-3 h-3 mr-1" style={{ color: '#2D56A8' }} />
              <span className="text-xs text-gray-600 truncate">
                {typeVehicle || 'SUV'}
              </span>
            </div>
          </div>

          {/* Botones a la derecha - más pequeños */}
          <div className="flex gap-1.5 ml-2">
            {/* Dollar sign button con fondo azul */}
            <button 
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
              style={{ backgroundColor: '#2D56A8', color: 'white' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1E3F7A'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2D56A8'}
            >
              <DollarSign className="w-4 h-4" />
            </button>

            {/* Info button */}
            <button 
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              style={{ color: '#2D56A8' }}
            >
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Additional specs con depósito en la misma línea - más compacto */}
      {(engine || mileage || traction || rims) && (
        <div className="px-3 pb-2 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <details className="text-xs text-gray-600 flex-1">
              <summary className="cursor-pointer hover:text-gray-800 font-medium py-1">
                Ver especificaciones
              </summary>
              <div className="mt-1 space-y-0.5 pl-2">
                {engine && <div>Motor: {engine}</div>}
                {mileage && <div>Km: {mileage.toLocaleString()}</div>}
                {traction && <div>Tracción: {traction}</div>}
                {rims && <div>Rines: {rims}</div>}
              </div>
            </details>
            
            {/* Deposit info al lado derecho */}
            {deposit > 0 && (
              <div className="text-xs text-gray-500 py-1">
                Depósito: ${deposit}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Si no hay specs pero sí hay depósito */}
      {!(engine || mileage || traction || rims) && deposit > 0 && (
        <div className="px-3 pb-2 border-t border-gray-100">
          <div className="text-xs text-gray-500 text-right py-1">
            Depósito: ${deposit}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCarRent;