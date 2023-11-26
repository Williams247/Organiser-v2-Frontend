import { UserPayload } from '@utils/default';

export interface ProfileResponsePayload {
  loading: boolean;
  success: boolean;
  updateProfile: (payload: UserPayload) => Promise<void>;
}
