import { useState, useEffect } from 'react';
 
export const useFetchCharacters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la API');
      }
      const result = await response.json();
      setData(result.results || []);
    } catch (err) {
      setError(err.message || 'Ocurrió un error inesperado');
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchData();
  }, []);
 
  return { data, loading, error, refetch: fetchData };
};
 