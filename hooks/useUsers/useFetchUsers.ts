import { useEffect, useState } from "react";
import { useFetcher } from "../useFetcher";
import {
  UseFetchUsersResponse,
  UserFetchData,
  FetchUsersPaginationoProps,
} from "./type";

export const useFetchUsers = ({
  page,
  limit,
}: FetchUsersPaginationoProps): UseFetchUsersResponse => {
  const [data, setData] = useState<UserFetchData | null | undefined>(null);
  const [success, setSuccess] = useState(false);
  const {
    data: response,
    isValidating: loading,
    mutate,
  } = useFetcher<UserFetchData | null | undefined>(
    `/users/fetch-users?page=${page ?? 1}&limit=${limit ?? 5}`
  );

  useEffect(() => {
    if (response && !loading) {
      const { data, success, message } = response;
      if (success && data) {
        setData(data);
        setSuccess(true);
      } else console.error("error occurred", message);
    }
  }, [loading, response]);

  return {
    loading,
    success,
    data,
    mutate,
  };
};
