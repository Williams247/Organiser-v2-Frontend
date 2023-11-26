export interface IAuthState {
  token?: string | null;
  redirect?: string | null;
  setToken: (token: string | null) => void;
  setRedirect: (redirect: string | null) => void;
}

export enum AuthStateActionType {
  SET_TOKEN,
  SET_REDIRECT,
}
