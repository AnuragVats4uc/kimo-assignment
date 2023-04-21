import Image from "next/image";
import React from "react";

const twc = {
  bannerContainer: "w-full relative banner-height overflow-x-hidden",
  headingContainer:
    "absolute w-full h-full top-0 flex flex-col justify-center items-center overflow-x-hidden lg:mt-10 xl:mt-0",
  heading:
    "text-64px lg:text-140px leading-64px lg:leading-132px font-bold text-center text-welcome plex-mono px-[30px]",
  description:
    "text-base leading-5 font-bold text-center text-welcome plex-mono block mt-4 px-4 lg:px-[188px] ",
  img: "object-cover w-full h-full bg-[#D9D9D9]",
};

export type BannerProps = {
  image?: string;
  heading?: string;
  description?: string;
};

export enum BANNER {
  HEADING = "Welcome to Hawaii",
  ALT = "homepage-icon",
  IMAGE_PATH = "/homepageIcon.png",
}

export const Banner = ({ image, heading, description }: BannerProps) => {
  return (
    <div className={twc.bannerContainer}>
      <div className="h-full">
        <Image
          className={twc.img}
          src={image ? image : BANNER.IMAGE_PATH}
          alt={BANNER.ALT}
          width={100}
          height={100}
        />
      </div>
      <div className={twc.headingContainer}>
        <h1 className={twc.heading}>{heading ? heading : BANNER.HEADING}</h1>
        {description && <p className={twc.description}>{description}</p>}
      </div>
    </div>
  );
};
