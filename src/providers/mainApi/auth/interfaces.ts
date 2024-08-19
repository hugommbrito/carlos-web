export interface iLoginOkResponse {
  accessToken: string;
  message: string;
}

export interface iLoginErrorResponse {
  statusCode: number;
  message: string;
  description: string;
  timestamp: string;
  path: string;
  where: string;
}
