export interface Action<T, R> {
  payload?: T | null;
  type: R;
}
