export interface FetchMessagesData {
  _id: string;
  email: string;
  from: string;
  message: string;
  createdAt: string;
}

export interface FetchMessageQueryProps {
  page: number;
  limit: number;
}

export interface FetchMessagesProps {
  currentPage: number;
  pages: number;
  results: Array<FetchMessagesData> | null;
}

export interface DeleteMessageResponse {
  loading: boolean;
  success: boolean;
  deleteMessage: (id: string) => Promise<void>;
}

export interface DeleteMessagesRespones {
  loading: boolean;
  success: boolean;
  deleteMessages: () => Promise<void>;
}
