export interface PaginatedResponse<T> {
  status: number;
  message: string;
  meta: Meta;
  data: T[];
}

interface Meta {
  length: number;
  prev: null;
  next: null;
}