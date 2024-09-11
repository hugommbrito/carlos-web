
export interface iGenericApiErrorResponse {
  statusCode: number;
  message: string;
  description: string;
  timestamp: string;
  path: string;
  where: string;
}