import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";
import { DeleteMessageResponse } from "./type";

export const useDeleteMessage = (): DeleteMessageResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const deleteMessage = useCallback(
    async (id: string) => {
      try {
        const { success, message } = await axios.delete<
          never,
          ApiResponse<DeleteMessageResponse>
        >(`/info/delete-a-message/${id}`);

        if (!success) {
          toast.error(message);
          setSuccess(false);
        } else if (success) {
          setSuccess(true);
          toast.success(message);
        }
      } catch (e) {
        console.error("Failed to delete message", e);
        setSuccess(false);
      }
    },
    [axios]
  );

  return {
    loading,
    success,
    deleteMessage,
  };
};
