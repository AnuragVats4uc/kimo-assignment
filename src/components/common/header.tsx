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
    "lg:flex lg:justify-center lg:items-center lg:space-x-5 xl:space-x-10 lg:ml-10 xl:ml-20",
  titleStyle:
    "lg:font-normal lg:text-lg lg:text-base lg:leading-5 lg:text-dark-green lg:cursor-pointer",
  buttonStyle:
    "lg:px-6 font-greycliff lg:pt-9px lg:pb-11px lg:text-center lg:font-bold lg:bg-teal lg:z-[5] lg:text-base lg:leading-5 lg:text-white lg:rounded-lg hover:bg-white hover:text-teal border border-teal transition-all ease-in-out duration-700",
};

export enum HEADERS {
  HOME_PATH = "/",
  HOME = "Home",
  TRADITIONAL_FESTIVAL = "Traditional Festivals",
  HULA = "Hula",
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
                  <span className="plex-mono">{HEADERS.HOME}</span>
                </Link>
                {highlights?.map((d: HighLightProp) => (
                  <Link
                    href={`/activities/${d.title}`}
                    className={twc.titleStyle}
                    key={d.title}
                  >
                    <span className="plex-mono">
                      {d.title.replace(
                        HEADERS.TRADITIONAL_FESTIVAL,
                        HEADERS.HULA
                      )}
                    </span>
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
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
