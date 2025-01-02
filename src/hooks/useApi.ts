/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';

export const useApi = (endpoint: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const predict = async (data: any) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post(`http://127.0.0.1:5000${endpoint}`, data);
      setResult(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'An error occurred aryan.');
    } finally {
      setLoading(false);
    }
  };

  return { predict, loading, error, result };
};
