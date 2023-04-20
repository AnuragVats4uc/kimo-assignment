import Image from "next/image";
import React from "react";

const twc = {
  travelContainer: "bg-light-cyan pb-20 lg:w-1/2 lg:pt-10",
  travelHeading: "text-base font-bold text-dark-green plex-mono pb-4 px-17px",
  travelHeadingContainer: "mr-19px ml-4 p-6 bg-white",
  travelHeadingInnerContainer: "flex justify-between mb-4",
  travelHeadingStyle: "plex-mono font-bold text-xl leading-5 mb-15px",
  travelDescription: "plex-mono font-normal text-base leading-5",
  travelImageContainer: "w-74px h-74px rounded-full",
  buttonLabel:
    "border-button font-bold text-base leading-5 rounded-lg text-teal px-6  pt-9px pb-11px flex items-center justify-center",
};

export const TravelGuide = () => {
  return (
    <div className={twc.travelContainer}>
      <p className={twc.travelHeading}>Travel Guide</p>
      <div className={twc.travelHeadingContainer}>
        <div className={twc.travelHeadingInnerContainer}>
          <div>
            <p className={twc.travelHeadingStyle}>Hadwin Malone</p>
            <p className={twc.travelDescription}>Guide since 2012</p>
          </div>
          <div className={twc.travelImageContainer}>
            <Image alt="" src="/cardImage.png" width={100} height={100} />
          </div>
        </div>
        <div className="">
          <button className={twc.buttonLabel}>Contact</button>
        </div>
      </div>
    </div>
  );
};
