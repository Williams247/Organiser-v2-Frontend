import { useEffect, useState } from "react";
import { useFetcher } from "../useFetcher";
import { FetchMessagesProps, FetchMessageQueryProps } from "./type";

export const useFetchMessages = ({ page, limit }: FetchMessageQueryProps) => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<FetchMessagesProps | null>(null);

  const {
    data: response,
    isValidating: loading,
    mutate,
  } = useFetcher(`/info/fetch-messages?page=${page}&limit=${limit}`);

  useEffect(() => {
    if (response && !loading) {
      const { data, success, message } = response;
      if (success) {
        setSuccess(true);
        setData(data as FetchMessagesProps | null);
      } else console.error("error occurred", message);
    }
  }, [loading, response, success]);

  return {
    loading,
    success,
    mutate,
    data,
  };
};
