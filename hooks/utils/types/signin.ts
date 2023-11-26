import { UserPayload } from '@utils/default';

export interface UseSigninResponse {
  loading: boolean;
  success: boolean;
  signin: (payload: UserPayload) => Promise<void>
}
