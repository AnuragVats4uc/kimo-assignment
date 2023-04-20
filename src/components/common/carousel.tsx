import Image from "next/image";
import React, { useContext } from "react";
import Slider from "react-slick";
import { Card } from "../card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HighLightProp } from "@/types/types";
import { AppContext } from "@/context/ApiContext";
import cn from "classnames";

const twc = {
  sliderContainer: "my-10",
  cardContainer: "py-6 pr-4 w-full",
  headingCategory: "text-base font-bold text-dark-green plex-mono px-4",
};
export const Carousel = () => {
  const { data } = useContext(AppContext);
  const { highlights } = data;
  let settings = {
    dots: false,
    arrows: false,
    center: true,
    slidesToShow: 1.03,
    slidesToScroll: 1,
  };
  return (
    <div className={twc.sliderContainer}>
      <p className={twc.headingCategory}>Highlights</p>
      <Slider {...settings} className="ml-4">
        {highlights?.map((d: HighLightProp) => (
          <div
            className={cn(twc.cardContainer, "bg-white mx-2.5")}
            key={d.title}
          >
            <Card data={d} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
