import Axios, { AxiosInstance } from "axios";
import {
  AxiosApiConfiguration,
  AxiosRequestConfig,
  IAxiosHttpClient,
  STATUS_CODE,
  STATUS_CODE_ERROR,
} from "../model";

export default class HttpClient implements IAxiosHttpClient {
  private client: AxiosInstance;
  protected createAxiosHttpClient(
    apiConfiguration?: AxiosApiConfiguration
  ): AxiosInstance {
    return Axios.create({
      baseURL: process.env.BASE_URL,
      responseType: "json" as const,
      headers: {
        "Content-Type": "application/json",
        ...(apiConfiguration?.accessToken && {
          Authorization: `Bearer ${apiConfiguration?.accessToken}`,
        }),
      },
    });
  }
  private handleError(error: any) {
    switch (error) {
      case STATUS_CODE.INTERNAL_SERVER_ERROR:
        throw new Error(STATUS_CODE_ERROR.INTERNAL_SERVER_ERROR);
      case STATUS_CODE.UNAUTHORIZED:
        throw new Error(STATUS_CODE_ERROR.UNAUTHORIZED);
      case STATUS_CODE.NO_CONTENT:
        throw new Error(STATUS_CODE_ERROR.NO_CONTENT);
      case STATUS_CODE.BAD_REQUEST:
        throw new Error(STATUS_CODE_ERROR.BAD_REQUEST);
      case STATUS_CODE.FORBIDDEN:
        throw new Error(STATUS_CODE_ERROR.FORBIDDEN);
      case STATUS_CODE.TOO_MANY_REQUEST:
        throw new Error(STATUS_CODE_ERROR.TOO_MANY_REQUEST);
    }
  }
  constructor(apiConfiguration?: AxiosApiConfiguration) {
    this.client = this.createAxiosHttpClient(apiConfiguration);
  }
  async get<TResponse>(path: string): Promise<TResponse> {
    try {
      const response = await this.client.get<TResponse>(path);
      const { status, data } = response;
      if (status === STATUS_CODE.OK) return data;
    } catch (error: any) {
      this.handleError(error.response.status);
    }
    return {} as TResponse;
  }
  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    try {
      const response = config
        ? await this.client.post<TResponse>(path, payload, config)
        : await this.client.post<TResponse>(path, payload, config);
      return response?.data;
    } catch (error: any) {
      this.handleError(error);
    }
    return {} as TResponse;
  }
  async put<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    try {
      const response = config
        ? await this.client.put<TResponse>(path, payload, config)
        : await this.client.put<TResponse>(path, payload);
      return response?.data;
    } catch (error) {
      this.handleError(error);
    }
    return {} as TResponse;
  }
  async delete<TResponse>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    try {
      const response = config
        ? await this.client.delete<TResponse>(path, config)
        : await this.client.delete<TResponse>(path);
      return response?.data;
    } catch (error) {
      this.handleError(error);
    }
    return {} as TResponse;
  }
}
