import { useEffect, useState } from "react";
import useSWR from "swr";

export const useGetData = (url) => {
  const [data, setData] = useState();
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
    url && fetchData();
  }, [url]);
  return { data, error, loading };
};
const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();
    if (res.status !== 200) {
      throw Promise.reject(result);
    } else {
      return result;
    }
  });
export const useGetSWRData = (url) => {
  const { data, error, ...rest } = useSWR(url, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
