import { Activities } from "@/components/Activities";
import { Banner } from "@/components/Banner";
import { Category } from "@/components/Category";
import { Card } from "@/components/card";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { AppContext } from "@/context/ApiContext";
import {
  activitiesService,
  categoriesService,
  hightlightService,
} from "@/core/service";
import { CategoriesProps, HighLightProp } from "@/types/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { useContext, useEffect } from "react";
export interface IParams extends ParsedUrlQuery {
  id: string;
}

export type ActivityProps = {
  activities: Activities;
  highlights: Array<HighLightProp>;
  categories: Array<CategoriesProps>;
};

export const ActivityType = ({
  activities,
  highlights,
  categories,
}: ActivityProps) => {
  const { setData } = useContext(AppContext);
  useEffect(() => {
    setData({ highlights, categories, activities });
  }, [highlights, setData, categories, activities]);
  return (
    <div>
      <Header />
      <Banner
        image={activities.image}
        heading={activities.name}
        description={activities.description}
      />
      <Activities />
      <Category
        isActivity={true}
        isIconEnabled={false}
        className="flex space-x-4 items-center overflow-scroll"
        classNameContainer="lg:w-full lg:px-[188px]"
      />
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await hightlightService.getHighlights();
  const paths = response?.map((d) => ({ params: { id: d.title } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { id } = context.params as IParams;
    const data = await hightlightService.getHighlights();
    const data2 = await categoriesService.getCategories();
    const response = await activitiesService.getActivities(id);
    return {
      props: {
        activities: response,
        highlights: data,
        categories: data2,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

export default ActivityType;
