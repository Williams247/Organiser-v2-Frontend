import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";
import { UseEnableDisableUser } from "./type";

export const useEnableDisableUser = (): UseEnableDisableUser => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const enableDisable = useCallback(
    async (id: string) => {
      try {
        const { success, message } = await axios.put<
          never,
          ApiResponse<UseEnableDisableUser>
        >(`/users/change-user-status/${id}`);

        if (!success) {
          toast.error(message);
          setSuccess(false);
        } else if (success) {
          setSuccess(true);
          toast.success(message);
        }
      } catch (e) {
        console.error("Failed to update profile", e);
        setSuccess(false);
      }
    },
    [axios]
  );

  return {
    loading,
    success,
    enableDisable,
  };
};
