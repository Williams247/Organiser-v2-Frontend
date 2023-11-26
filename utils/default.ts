import { IAuthState } from "./types";

export const DefaultAuthState: IAuthState = {
  setRedirect: () => null,
  setToken: () => null,
  token: null,
  redirect: null,
};

export interface ActivitiesPayload {
  _id?: string;
  todo?: string;
  note?: string;
  owner?: string;
  role?: string;
  isChecked?: boolean;
  createdAt?: string;
  updatedAt?: string | null;
}

export interface UserPayload {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  image?: string;
  verified?: boolean;
  role?: string;
}
