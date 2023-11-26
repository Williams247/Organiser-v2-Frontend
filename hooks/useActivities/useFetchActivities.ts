import { useEffect, useState } from 'react';
import { useFetcher } from '../useFetcher';

import {
  FetchActivitiesResponse,
  FetchActivityResponseData,
} from '../utils/types/activities';

interface Props {
  page: number;
  limit: number;
  todo?: string;
  note?: string;
}

export const useFetchActivities = ({
  page,
  limit,
  todo,
  note,
}: Props): FetchActivitiesResponse => {
  const [data, setData] = useState<FetchActivityResponseData | null>(null);
  const [success, setSuccess] = useState(false);
  const {
    data: response,
    isValidating: loading,
    mutate,
  } = useFetcher<FetchActivityResponseData>(
    `/activities/get-activities?page=${page}&limit=${limit}&todo=${todo ?? ""}&note=${note ?? ""}`
  );

  useEffect(() => {
    if (response && !loading) {
      const { data, success, message } = response;
      if (success && data) {
        setData(data);
        setSuccess(true);
      } else console.error('error occurred', message);
    }
  }, [loading, response]);

  return {
    loading,
    success,
    data,
    mutate,
  };
};
