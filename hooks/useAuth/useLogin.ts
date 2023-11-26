import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { AppName } from '@utils/common';
import { useAxios } from "../useAxios"
import { UserPayload } from '@utils/default';
import { UseLoginResponse, UserData } from '../utils/types';
import { ApiResponse } from "../types";

export const useLogin = (): UseLoginResponse => {
  const { push } = useRouter();
  const { axios, loading } = useAxios();
  const [data, setData] = useState<UserData | null | undefined>(null);
  const [success, setSuccess] = useState(false);

  const login = useCallback(
    async (payload: UserPayload) => {
      try {
        const {
          data: loginData,

          success,
          message,
        } = await axios.post<never, ApiResponse<UserData>>('/auth/login', {
          ...payload,
        });

        if (!success) {
          toast.error(message);
          setSuccess(false);
        } else if (success) {
          localStorage.setItem(AppName, loginData?.token as string);
          setData(loginData);
          setSuccess(true);
          toast.success(message);
          setTimeout(() => {
            window.location.href = '/activities';
          }, 1000);
        }
      } catch (e) {
        console.error('Failed to login user', e);
        setSuccess(false);
      }
    },
    [axios, push]
  );

  return {
    loading,
    data,
    success,
    login,
  };
};
