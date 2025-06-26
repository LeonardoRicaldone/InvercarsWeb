// hooks/useBrands.js
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../utils/api';

const useDataBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/brands`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      setBrands(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching brands:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  // Función para refrescar los datos
  const refetch = () => {
    fetchBrands();
  };

  return {
    brands,
    loading,
    error,
    refetch
  };
};

export default useDataBrands;