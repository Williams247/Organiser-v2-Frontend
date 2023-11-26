import { useEffect, useState } from 'react';
import { useFetcher } from '../useFetcher';

export const useFetchActivityPercentage = () => {
  const [data, setData] = useState<number>(0);
  const [success, setSuccess] = useState(false);
  const {
    data: response,
    isValidating: loading,
    mutate,
  } = useFetcher<number>('/activities/get-activity-percentage');

  useEffect(() => {
    if (response && !loading) {
      const { data, success, message } = response;
      if (success) {
        setData(data ?? 0);
        setSuccess(true);
      } else console.error('error occurred', message);
    }
  }, [loading, response, success]);

  return {
    loading,
    success,
    data,
    mutate,
  };
};
