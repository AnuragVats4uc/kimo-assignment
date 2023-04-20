import { CategoriesProps } from "@/types/types";
import { IAxiosHttpClient } from "../model";

export interface ICategories {
  getCategories: () => Promise<ICategories.Model>;
}

export namespace ICategories {
  export type Model = Array<CategoriesProps>;
}

export class CategoriesApiClient {
  categoriesApiClient: IAxiosHttpClient;
  constructor(categoriesApiClient: IAxiosHttpClient) {
    this.categoriesApiClient = categoriesApiClient;
  }
  async get(): Promise<any> {
    try {
      const response = await this.categoriesApiClient.get("/categories");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default class CategoriesService implements ICategories {
  categoriesApiClient: any;
  constructor(categoriesApiClient: any) {
    this.categoriesApiClient = categoriesApiClient;
  }
  async getCategories(): Promise<ICategories.Model> {
    return this.categoriesApiClient.get();
  }
}
