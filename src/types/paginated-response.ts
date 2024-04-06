export interface PaginatedResponse<T> {
  data: T;
  totalAmount: number;
  offset: number;
  limit: number;
}
