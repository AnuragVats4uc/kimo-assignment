import { ActivitiesProps } from "@/types/types";
import { IAxiosHttpClient } from "../model";

export interface IActivities {
  getActivities: (activityType: string) => Promise<IActivities.Model>;
}

export namespace IActivities {
  export type Model = {
    data: ActivitiesProps;
  };
}

export class ActivitiesApiClient {
  activitiesApiClient: IAxiosHttpClient;
  constructor(activitiesApiClient: IAxiosHttpClient) {
    this.activitiesApiClient = activitiesApiClient;
  }
  async get(activityType: string): Promise<any> {
    try {
      const response = await this.activitiesApiClient.get(
        "/activities/" + activityType
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default class ActivitiesService implements IActivities {
  activitiesApiClient: any;
  constructor(activitiesApiClient: any) {
    this.activitiesApiClient = activitiesApiClient;
  }

  async getActivities(activityType: string): Promise<IActivities.Model> {
    return this.activitiesApiClient.get(activityType);
  }
}
