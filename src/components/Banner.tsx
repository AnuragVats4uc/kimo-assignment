import Image from "next/image";
import React from "react";

const twc = {
  bannerContainer: "w-full relative banner-height overflow-x-hidden",
  headingContainer:
    "absolute w-full h-full top-0 flex flex-col justify-center items-center overflow-x-hidden",
  heading:
    "text-64px lg:text-140px leading-64px lg:leading-132px font-bold text-center text-welcome plex-mono",
  description:
    "text-base leading-5 font-bold text-center text-welcome plex-mono block mt-4",
};

export type BannerProps = {
  image?: string;
  heading?: string;
  description?: string;
};

export const Banner = ({ image, heading, description }: BannerProps) => {
  return (
    <div className={twc.bannerContainer}>
      <div className="h-full">
        <Image
          className="object-cover w-full h-full bg-[#D9D9D9]"
          src={image ? image : "/homepageIcon.png"}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className={twc.headingContainer}>
        <h1 className={twc.heading}>
          {heading ? heading : "Welcome to Hawaii"}
        </h1>
        {description && <p className={twc.description}>{description}</p>}
      </div>
    </div>
  );
};
