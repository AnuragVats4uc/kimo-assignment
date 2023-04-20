import React, { useContext, useState } from "react";
import { Menu } from "../icons/menu";
import { AlohaIcon } from "../icons/Aloha";
import { Sidebar } from "./sidebar";
import { HEADER, HighLightProp } from "@/types/types";
import { AppContext } from "@/context/ApiContext";
import Link from "next/link";

const twc = {
  headerContainerMobile:
    "flex justify-between items-center px-6 py-5 relative lg:hidden",
  headerContainerDesktop:
    "hidden lg:flex lg:justify-center lg:w-full lg:absolute lg:mt-6 lg:top-0 z-50",
  headerInnerContainerDesktop:
    "bg-white z-50 lg:w-full lg:px-4 xl:px-6 lg:py-4 xl:py-5  lg:flex lg:justify-between rounded-xl",
  titleContainer:
    "flex justify-center items-center lg:space-x-5 xl:space-x-10 lg:ml-10 xl:ml-20",
  titleStyle:
    "font-normal text-lg lg:text-base leading-5 text-dark-green cursor-pointer",
  buttonStyle:
    "px-6 pt-9px pb-11px text-center bg-teal z-[5] text-base leading-5 text-white rounded-lg",
};

export enum HEADERS {
  HOME_PATH = "/",
  HOME = "HOME",
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useContext(AppContext);
  const { highlights } = data;
  return (
    <>
      <div className={twc.headerContainerMobile}>
        <AlohaIcon />
        <Menu onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className={twc.headerContainerDesktop}>
        <div className="containers w-full">
          <div className={twc.headerInnerContainerDesktop}>
            <div className="flex items-center">
              <AlohaIcon />
              <ul className={twc.titleContainer}>
                <Link href={HEADERS.HOME_PATH} className={twc.titleStyle}>
                  {HEADERS.HOME}
                </Link>
                {highlights?.map((d: HighLightProp) => (
                  <Link
                    href={`/activities/${d.title}`}
                    className={twc.titleStyle}
                    key={d.title}
                  >
                    {d.title}
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <button className={twc.buttonStyle}>{HEADER.BUTTON_LABEL}</button>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
};
