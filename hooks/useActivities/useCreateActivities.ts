import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { ActivitiesPayload } from "@utils/default";
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";
import { ActivitesResponse } from "../utils/types/activities";

export const useCreateActivities = (): ActivitesResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const createActivties = useCallback(
    async (payload: ActivitiesPayload) => {
      try {
        const { success, message } = await axios.post<
          never,
          ApiResponse<ActivitesResponse>
        >("/activities/create-activity", {
          ...payload,
        });

        if (!success) {
          toast.success(message);
          setSuccess(false);
          return;
        }

        if (success) {
          toast.success(message);
          setSuccess(true);
        }
      } catch (e) {
        console.error("Failed to login user", e);
        setSuccess(false);
      }
    },
    [axios]
  );

  return {
    loading,
    success,
    createActivties,
  };
};
