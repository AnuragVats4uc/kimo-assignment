import { AppContext } from "@/context/ApiContext";
import React, { useContext } from "react";

export type ActivityName = {
  name: string;
};
export type Activities = {
  name: string;
  description: string;
  image: string;
  activities: ActivityName[];
};

const twc = {
  headingCategory: "text-base font-bold text-dark-green plex-mono pb-4",
  label:
    "mb-2 p-6 flex plex-mono justify-between items-center bg-white cursor-pointer w-full rounded-lg",
};

export const Activities = () => {
  const { data } = useContext(AppContext);
  const { activities } = data;
  return (
    <div className="px-17px lg:px-[188px] py-10 bg-light-cyan">
      <p className={twc.headingCategory}>Activities</p>
      <div className="space-y-4">
        {activities?.activities?.map((d: Activities) => (
          <li key={d.name} className={twc.label}>{d.name}</li>
        ))}
      </div>
    </div>
  );
};
