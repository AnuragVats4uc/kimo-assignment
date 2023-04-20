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
