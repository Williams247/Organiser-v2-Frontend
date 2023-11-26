import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";

import { UserPayload } from "@utils/default";
import { ProfileResponsePayload } from "./utils";

export const useUpdateProfile = (): ProfileResponsePayload => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const updateProfile = useCallback(
    async (payload: UserPayload) => {
      try {
        const { success, message } = await axios.put<
          never,
          ApiResponse<ProfileResponsePayload>
        >("/profile/update-profile", {
          ...payload,
        });

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
    updateProfile,
  };
};
