import { useEffect, useState } from "react";

export const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) {
        setError(result);
      } else {
        setData(result);
      }

      setLoading(false);
    }
    fetchData();
  }, [data]);
  return { data, error, loading };
};
