import { useEffect, useState } from 'react';
import axios from 'axios';

const useFigure = () => {
  const [figures, setFigures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFigures = async () => {
      try {
        const res = await axios.get('http://localhost:3000/figure'); 
        setFigures(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Lỗi fetch dữ liệu');
        setLoading(false);
      }
    };

    fetchFigures();
  }, []);

  return { figures, loading, error };
};

export default useFigure;
