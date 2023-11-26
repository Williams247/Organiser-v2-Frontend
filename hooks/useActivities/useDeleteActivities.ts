import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";
import { DeleteAllActivitiesResponse } from '../utils/types/activities';

export const useDeleteAllActivities = (): DeleteAllActivitiesResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const deleteAllActivity = useCallback(async () => {
    try {
      const { success, message } = await axios.delete<
        never,
        ApiResponse<DeleteAllActivitiesResponse>
      >('/activities/delete-all-activities');

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
  }, [axios]);

  return {
    loading,
    success,
    deleteAllActivity,
  };
};
