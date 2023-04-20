import { HighLightProp } from "@/types/types";
import { IAxiosHttpClient } from "../model";

export interface IHightLight {
  getHighlight: () => Promise<IHighLight.Model>;
}

export namespace IHighLight {
  export type Model = Array<HighLightProp>;
}

export class HighlightApiClient {
  highlightApiClient: IAxiosHttpClient;
  constructor(highlightApiClient: IAxiosHttpClient) {
    this.highlightApiClient = highlightApiClient;
  }
  async get(): Promise<any> {
    try {
      const response = await this.highlightApiClient.get("/highlights");
      return response;
    } catch (error) {
      return console.log(error);
    }
  }
}

export default class HighlightService {
  highlightApiClient: any;
  constructor(highlightApiClient: any) {
    this.highlightApiClient = highlightApiClient;
  }
  async getHighlights(): Promise<IHighLight.Model> {
    return this.highlightApiClient.get();
  }
}
