import { useState, useEffect } from "react";

export function useFetch<T>(url: string, options?: RequestInit): {
  data: T | null;
  error: Error | null;
  loading: boolean;
} {

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url, options]);

  return { data, error, loading };
}