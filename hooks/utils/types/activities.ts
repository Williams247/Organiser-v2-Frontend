import { ActivitiesPayload } from '@utils/default';

export interface ActivitesResponse {
  loading: boolean;
  success: boolean;
  createActivties: (payload: ActivitiesPayload) => Promise<void>;
}

export interface DeleteActivitesResponse {
  loading: boolean;
  success: boolean;
  deleteActivity: (id: string) => Promise<void>;
}

export interface DeleteAllActivitiesResponse {
  loading: boolean;
  success: boolean;
  deleteAllActivity: () => Promise<void>;
}

export type ActivitiesResponse = ActivitiesPayload[];

export interface FetchActivityResponseData {
  totalItems?: number;
  currentPage?: number;
  pages?: number;
  results: ActivitiesResponse;
}

export interface FetchActivitiesResponse {
  loading: boolean;
  success: boolean;
  data?: FetchActivityResponseData | null;
  mutate?: () => void;
  percentageDataRes?: number;
}

export interface UpdateActivityPayload {
  isChecked?: boolean;
  id?: string;
  todo?: string;
  note?: string;
}

export interface UpdateActivityResponse {
  loading: boolean;
  success: boolean;
  updateActivties: (payload: UpdateActivityPayload) => Promise<void>;
}
