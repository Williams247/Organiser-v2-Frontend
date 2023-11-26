import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";
import { DeleteActivitesResponse } from '../utils/types/activities';

export const useDeleteActivity = (): DeleteActivitesResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const deleteActivity = useCallback(
    async (id: string) => {
      try {
        const { success, message } = await axios.delete<
          never,
          ApiResponse<DeleteActivitesResponse>
        >(`/activities/delete-activity/${id}`);

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
        console.error('Failed to login user', e);
        setSuccess(false);
      }
    },
    [axios]
  );

  return {
    loading,
    success,
    deleteActivity,
  };
};
