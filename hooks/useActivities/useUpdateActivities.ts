import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";

import {
    UpdateActivityResponse,
  UpdateActivityPayload,
} from '../utils/types/activities';

export const useUpdateActivity = (): UpdateActivityResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const updateActivties = useCallback(
    async (payload: UpdateActivityPayload) => {
      try {
        const { success, message } = await axios.put<
          never,
          ApiResponse<UpdateActivityResponse>
        >(
          `/activities/update-activity/${payload.id}`,
          {
            isChecked: payload.isChecked,
            todo: payload.todo,
            note: payload.note
          }
        );

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
    updateActivties,
  };
};
