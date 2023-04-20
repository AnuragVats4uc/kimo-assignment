import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/common/header";
import { Category } from "@/components/Category";
import { Footer } from "@/components/common/footer";
import { TravelGuide } from "@/components/TravelGuide";
import { Banner } from "@/components/Banner";
import { useContext, useEffect, useState } from "react";
import { Carousel } from "@/components/common/carousel";
import { Card } from "@/components/card";
import axios from "axios";
import { CategoriesProps, HighLightProp } from "@/types/types";
import { AppContext } from "@/context/ApiContext";
import { categoriesService, hightlightService } from "@/core/service";

const inter = Inter({ subsets: ["latin"] });

export type HomeProps = {
  highlights: Array<HighLightProp>;
  categories: Array<CategoriesProps>;
};

export default function Home({ highlights, categories }: HomeProps) {
  const { setData, data } = useContext(AppContext);
  useEffect(() => {
    setData({ highlights, categories });
  }, [highlights, categories, setData]);
  return (
    <div className="relative overflow-hidden">
      <div className="lg:container lg:flex lg:justify-center lg:mx-auto">
        <Header />
      </div>
      <Banner />
      <div className="w-screen lg:hidden">
        <Carousel />
      </div>
      <div className="hidden lg:block px-[188px]  mt-10 mb-20">
        <p className={"text-base font-bold text-dark-green plex-mono pb-4"}>
          Highlights
        </p>
        <div className="flex space-x-4">
          {highlights.map((d) => {
            return (
              <div className="w-full lg:flex container" key={d.title}>
                <Card data={d} key={d.title} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:flex lg:w-full bg-light-cyan flex justify-center px-[188px]">
        <Category />
        <TravelGuide />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps(params: any) {
  const data = await hightlightService.getHighlights();
  const data2 = await categoriesService.getCategories();
  return {
    props: {
      highlights: data,
      categories: data2,
    },
  };
}
