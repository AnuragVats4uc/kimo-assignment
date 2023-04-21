import Image from "next/image";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { HEADER, HighLightProp } from "@/types/types";
import { AppContext } from "@/context/ApiContext";
import cn from "classnames";
import Link from "next/link";
import { HEADERS } from "./header";
import { useRouter } from "next/router";

export type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const twc = {
  sidebarContainer:
    "top-0 right-0 pl-25px background-sidebar z-10 w-full fixed h-screen ease-in-out duration-500",
  iconContainer: "bg-white w-full h-full",
  icon: "p-6 flex justify-end h-20",
  labelContainer: "px-10 py-11 ",
  label:
    "plex-mono font-normal text-xl leading-5 text-dark-green z-[1] pb-10 block",
  buttonStyle:
    "px-6 pt-9px pb-11px text-center bg-teal z-[5] text-base leading-5 text-white rounded-lg font-greycliff",
};

export const Sidebar = ({  isOpen, setIsOpen }: SidebarProps) => {
  const { data } = useContext(AppContext);
  const { highlights } = data;
  const { pathname } = useRouter();
  useEffect(() => {
    const body: any = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";
    setIsOpen(false);
  }, [pathname]);
  return (
    <div
      className={cn(twc.sidebarContainer, {
        "translate-x-0 overflow-y-": isOpen,
        "translate-x-full": !isOpen,
      })}
    >
      <div className={twc.iconContainer}>
        <div className={twc.icon}>
          <CloseIcon onClick={() => setIsOpen(!isOpen)} />
        </div>
        <ul className={cn(twc.labelContainer, {})}>
          <Link href={HEADERS.HOME_PATH} className={twc.label}>
            {HEADERS.HOME}
          </Link>
          {highlights?.map((d: HighLightProp) => (
            <Link
              href={`/activities/${d.title}`}
              key={d.title}
              className={twc.label}
              onClick={() => setIsOpen(false)}
            >
              {d.title}
            </Link>
          ))}
          <li>
            <button className={twc.buttonStyle}>{HEADER.BUTTON_LABEL}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
