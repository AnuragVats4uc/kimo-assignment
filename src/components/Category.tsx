import React, { useContext, useState } from "react";
import { NextIcon } from "./icons/nextIcon";
import Link from "next/link";
import { CategoriesProps } from "@/types/types";
import { AppContext } from "@/context/ApiContext";
import cn from 'classnames'

const twc = {
  categoryContainer: "bg-light-cyan py-10 pl-17px pr-4 lg:w-1/2",
  headingCategory: "text-base font-bold text-dark-green plex-mono pb-4",
  category:
    "mb-2 p-6 flex justify-between items-center bg-white cursor-pointer",
  categoryTitle: "font-normal text-base leading-5",
};

export type CategoryProps = {
  isIconEnabled?: boolean;
  className?: string;
  classNameContainer?:string
};

export const Category = ({
  isIconEnabled = true,
  className,
  classNameContainer
}: CategoryProps) => {
  const { data } = useContext(AppContext);
  const { categories } = data;
  const [isActive, setIsActive] = useState("Adventure");
  const filter = categories?.filter((d: any) => d.name === isActive) || [];
  console.log("aaa",filter)
  return (
    <div className={cn(twc.categoryContainer,classNameContainer)}>
      <p className={twc.headingCategory}>Categories</p>
      <div className={className}>
        {categories?.map((d: CategoriesProps, i: number) => {
          return (
            <div key={i}>
              <li
                className={twc.category}
                onClick={() => setIsActive(d.name)}
              >
                <p className={twc.categoryTitle}>{d.name}</p>
                {isIconEnabled && <NextIcon />}
              </li>
            </div>
          );
        })}
      
      </div>
      {filter[0]?.activities?.map((e: any, i: any) => {
          return (
            <li key={i} className={`${twc.category} w-full`}>
              {e.title}
            </li>
          );
        })}
    </div>
  );
};
