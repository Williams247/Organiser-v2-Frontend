import { UserPayload } from "@utils/default";

export interface UserFetchData {
  currentPage: number;
  pages: number;
  totalItems: number;
  results: UserPayload[] | null;
}

export interface FetchUsersPaginationoProps {
  page?: number;
  limit?: number;
}

export interface UseFetchUsersResponse {
  loading?: boolean;
  success?: boolean;
  data?: UserFetchData | null | undefined;
  mutate: () => void;
}

export interface UseEnableDisableUser {
  loading?: boolean;
  success?: boolean;
  enableDisable: (id: string) => Promise<void>;
}
