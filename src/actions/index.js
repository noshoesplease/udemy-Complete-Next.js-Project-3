import { useEffect, useState } from "react";

export const useGetPortfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolios() {
      const response = await fetch("http://localhost:3000/api/v1/portfolios");
      const result = await response.json();

      if (response.status !== 200) {
        setError(result);
      } else {
        setPortfolios(result);
      }

      setLoading(false);
    }
    fetchPortfolios();
  }, [portfolios]);
  return { portfolios, error, loading };
};
