import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { UserPayload } from "@utils/default";
import { Role } from "@utils/common";
import { useAxios } from "../useAxios";
import { ApiResponse } from "../types";
import { UseSigninResponse, UserData } from "../utils/types";

export const useSignin = (): UseSigninResponse => {
  const { push } = useRouter();
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  const signin = useCallback(
    async (payload: UserPayload) => {
      try {
        const { success, message } = await axios.post<
          never,
          ApiResponse<UserData>
        >("/auth/register", {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
          confirmPassword: payload.confirmPassword,
          role: Role.USER,
        });

        if (!success) {
          toast.error(message);
          setSuccess(false);
        } else if (success) {
          toast.success(message);
          setSuccess(true);
          void push("/");
        }
      } catch (e) {
        console.error("Failed to signin user", e);
        setSuccess(false);
      }
    },
    [axios, push]
  );

  return {
    loading,
    signin,
    success,
  };
};
