// hooks/Cars/useRentalCars.js
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../utils/api';

const useDataRentalCars = () => {
  const [rentalCars, setRentalCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRentalCars = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching rental cars from:', `${API_BASE_URL}/cars/rentalCars`);
      
      const response = await fetch(`${API_BASE_URL}/cars/rentalCars`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Response data:', data);
      
      // Manejar ambos formatos de respuesta
      const carsData = data.success ? data.data : data;
      
      if (!Array.isArray(carsData)) {
        console.warn('Expected array but got:', typeof carsData, carsData);
        setRentalCars([]);
      } else {
        // Procesar los datos para construir el título con marca y modelo
        const processedCars = carsData.map(car => ({
          ...car,
          // Construir título con marca y modelo
          displayTitle: car.idModel?.idBrand?.name && car.idModel?.name 
            ? `${car.idModel.idBrand.name} ${car.idModel.name}`
            : car.title || 'Vehículo Disponible',
          // Mantener datos adicionales para fácil acceso
          brandName: car.idModel?.idBrand?.name || 'Marca no disponible',
          modelName: car.idModel?.name || 'Modelo no disponible',
          brandLogo: car.idModel?.idBrand?.logo || null
        }));
        
        console.log('Processed cars with titles:', processedCars);
        setRentalCars(processedCars);
      }
      
    } catch (err) {
      setError(err.message);
      console.error('Error fetching rental cars:', err);
      setRentalCars([]); // Reset en caso de error
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchRentalCars();
  };

  useEffect(() => {
    fetchRentalCars();
  }, []);

  return {
    rentalCars,
    loading,
    error,
    refetch,
    // Funciones adicionales útiles
    isEmpty: rentalCars.length === 0,
    count: rentalCars.length
  };
};

export default useDataRentalCars;