import { useEffect, useState } from 'react';
import { UserPayload } from '@utils/default';
import { useFetcher } from '../useFetcher';

export const useFetchProfile = () => {
  const [profile, setProfile] = useState<UserPayload | null>(null);
  const [success, setSuccess] = useState(false);
  const { data: response, isValidating: loading, mutate } = useFetcher<UserPayload>(
    '/profile/fetch-profile'
  );

  useEffect(() => {
    if (response && !loading) {
      const { data, success, message } = response;
      if (success && data) {
        setProfile(data);
        setSuccess(true);
      } else console.error('error occurred', message);
    }
  }, [loading, response]);

  return {
    loading,
    profile,
    success,
    mutate
  };
};
