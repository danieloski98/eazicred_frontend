export interface IReturn {
  error: boolean;
  statusCode: number;
  errorMessage?: string;
  successMessage?: string;
  data?: any
}
