import Image from "next/image";
import React from "react";
import { ArrowForward } from "./icons/ArrowForward";
import { HighLightProp } from "@/types/types";

export type CardProps = {
  data: HighLightProp | any;
};

const twc = {
  cardContainer: "w-full h-full  bg-white rounded-lg boxShadow",
  imageContainer: "w-full rounded-lg",
  image: "w-full rounded-t-lg",
  title: "plex-mono font-bold text-base text-teal leading-5 pb-4 " ,
  description: "plex-mono font-normal text-base leading-5 text-dark-green line-clamp-2 text-ellipsis",
  iconContainer: "flex justify-end px-6 pb-6",
  icon: "rounded-full w-10 h-10 bg-light-cyan flex justify-center items-center",
};

export const Card = ({ data }: CardProps) => {
  return (
    <div className={twc.cardContainer}>
      <div className={twc.imageContainer}>
        <Image
          className={twc.image}
          src={data.image}
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <div className="p-6">
        <p className={twc.title}>{data.title || data.name}</p>
        <p className={twc.description}>{data.description}</p>
      </div>
      <div className={twc.iconContainer}>
        <div className={twc.icon}>
          <ArrowForward />
        </div>
      </div>
    </div>
  );
};
