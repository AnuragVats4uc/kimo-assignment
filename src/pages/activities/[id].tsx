import { Banner } from "@/components/Banner";
import { Category } from "@/components/Category";
import { Card } from "@/components/card";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { AppContext } from "@/context/ApiContext";
import { categoriesService, hightlightService } from "@/core/service";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const twc = {
  headingCategory: "text-base font-bold text-dark-green plex-mono pb-4",
};

function ActivityType({ activities, highlights, categories }: any) {
  const { setData } = useContext(AppContext);
  useEffect(() => {
    setData({ highlights, categories });
  }, [highlights, setData, categories]);
  return (
    <div>
      <Header />
      <Banner
        image={activities.image}
        heading={activities.name}
        description={activities.description}
      />
      {/* <div className="px-4 mt-10">
        <p className={twc.headingCategory}>Activities</p>
        {activities.activities.map((d: any) => {
          return <Card key={d.name} data={d} />;
        })}
      </div> */}
      <Category isIconEnabled={false} className="flex space-x-4 items-center overflow-scroll -mx-4 px-2" classNameContainer="lg:w-full" />
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await hightlightService.getHighlights();
  const paths = response.map((d) => ({ params: { id: d.title } }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: any) => {
  const data = await hightlightService.getHighlights();
  const data2 = await categoriesService.getCategories();
  const response = await axios.get(
    `https://web-dev.dev.kimo.ai/v1/activities/${context.params.id}`
  );

  return {
    props: {
      activities: response.data,
      highlights: data,
      categories: data2,
    },
  };
};

export default ActivityType;
