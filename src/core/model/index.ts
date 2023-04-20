export type AxiosHttpHeader = {
  [key: string]: string;
};

export type AxiosRequestConfig = {
  headers: AxiosHttpHeader;
};

export enum STATUS_CODE {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  TOO_MANY_REQUEST = 429,
  INTERNAL_SERVER_ERROR = 500,
  BAD_REQUEST_404 = 404,
}

export enum STATUS_CODE_ERROR {
  INTERNAL_SERVER_ERROR = "Internal Server Error",
  TOO_MANY_REQUEST = "Too Many Requests",
  BAD_REQUEST = "Bad Request",
  NO_CONTENT = "No Content",
  UNAUTHORIZED = "Unauthorized",
  FORBIDDEN = "Forbidden",
}

export interface IAxiosHttpClient {
  get<TResponse>(path: string): Promise<TResponse>;
  post<TRequest, TResponse>(
    path: string,
    object: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse>;
  put<TRequest, TResponse>(
    path: string,
    object: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse>;
  delete<TResponse>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<TResponse>;
}

export class AxiosApiConfiguration {
  accessToken?: string;
}
