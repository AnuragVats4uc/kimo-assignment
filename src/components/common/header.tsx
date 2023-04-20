import React, { useContext, useState } from "react";
import { Menu } from "../icons/menu";
import { AlohaIcon } from "../icons/Aloha";
import { Sidebar } from "./sidebar";
import { HEADER, HighLightProp } from "@/types/types";
import { AppContext } from "@/context/ApiContext";

const twc = {
  headerContainerMobile:
    "flex justify-between items-center px-6 relative lg:hidden mx-10",
  headerContainerDesktop: "hidden lg:flex lg:justify-center lg:w-full",
  headerInnerContainerDesktop:
    "lg:absolute lg:mt-6 lg:top-0 bg-white z-50 lg:w-full lg:px-6 lg:py-5 lg:flex lg:justify-between rounded-xl",
  titleContainer:
    "flex justify-center items-center lg:space-x-5 xl:space-x-10 lg:ml-20",
  titleStyle:
    "font-normal text-lg lg:text-base leading-5 text-dark-green cursor-pointer",
  buttonStyle:
    "px-6 pt-9px pb-11px text-center bg-teal z-[5] text-base leading-5 text-white rounded-lg",
};

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
        <div className={twc.headerInnerContainerDesktop}>
          <div className="flex items-center">
            <AlohaIcon />
            <ul className={twc.titleContainer}>
              <li className={twc.titleStyle}>Home</li>
              {highlights?.map((d: HighLightProp) => {
                return (
                  <li className={twc.titleStyle} key={d.title}>
                    {d.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button className={twc.buttonStyle}>{HEADER.BUTTON_LABEL}</button>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
};
