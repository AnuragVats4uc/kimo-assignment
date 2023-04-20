import HttpClient from "../api/ApiClient";
import { AxiosApiConfiguration } from "../model";
import ActivitiesService, { ActivitiesApiClient } from "./ativities";
import CategoriesService, { CategoriesApiClient } from "./categories";
import HighlightService, { HighlightApiClient } from "./highlight";

export const ApiConfig = () => {
  return new HttpClient(new AxiosApiConfiguration());
};
const categoriesApiClients = new CategoriesApiClient(ApiConfig());
export const categoriesService = new CategoriesService(categoriesApiClients);

const highlightApiClients = new HighlightApiClient(ApiConfig());
export const hightlightService = new HighlightService(highlightApiClients);

const activitiesApiClients = new ActivitiesApiClient(ApiConfig());
export const activitiesService = new ActivitiesService(activitiesApiClients);
