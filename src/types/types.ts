export type HighLightProp = {
  title: string;
  description: string;
  image: string;
};

export type ActivitiesProps = {
  title: string;
};

export type CategoriesProps = {
  name: string;
  activities: Array<ActivitiesProps>;
};

export enum HEADER {
  BUTTON_LABEL = "Book a trip",
}
