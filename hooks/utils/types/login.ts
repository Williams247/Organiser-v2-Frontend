import { UserPayload } from '@utils/default';

export interface UserData {
  loading: boolean;
  success: boolean;
  user: UserPayload;
  token: string;
}

export interface UseLoginResponse {
  loading: boolean;
  success: boolean;
  data?: UserData | null;
  login: (payload: UserPayload) => Promise<void>
}
