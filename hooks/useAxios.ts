import { type ApiResponse, type UseAxiosResponse } from "./types";
import Axios, { AxiosError, AxiosRequestHeaders, AxiosResponse } from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Status } from "@utils/common"
import { AppName } from "@utils/common";

export const useAxios = (): UseAxiosResponse => {
  const [loading, setLoading] = useState<boolean>(false);

  const axios = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/v2`,
  });

  axios.interceptors.request.use((config) => {
    setLoading(true);
    const token = localStorage.getItem(AppName);
    if (token) {
      const headers = config.headers ?? ({} as AxiosRequestHeaders);
      headers.Authorization = token;
      config.headers = headers;
    }
    return config;
  });

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      setLoading(false);
      return response.data;
    },
    (error: AxiosError<ApiResponse>) => {
      setLoading(false);
      if (!error.response) {
        toast.error("connection error");
        throw error;
      }

      const response = error.response;

      if (response.status >= Status.SERVER_ERROR) {
        toast.error("an unknown server error occurred");
      } else if (response.status === Status.NOT_FOUND) {
        toast.error("resource not found");
      } else if (response.status === Status.UNAUTHORIZED) {
        const pathname = window.location.pathname;
        if (pathname !== "/") {
          window.location.href = "/";
          localStorage.clear();
        }
      } else {
        if (response.data.message) {
          toast.error(response.data.message);
        }
      }
      throw error;
    }
  );

  return { axios, loading };
};
