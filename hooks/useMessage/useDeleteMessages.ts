import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";
import { DeleteMessagesRespones } from "./type";

export const useDeleteMessages = (): DeleteMessagesRespones => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const deleteMessages = useCallback(
    async () => {
      try {
        const { success, message } = await axios.delete<
          never,
          ApiResponse<DeleteMessagesRespones>
        >('/info/delete-all-messages');

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
    deleteMessages,
  };
};
