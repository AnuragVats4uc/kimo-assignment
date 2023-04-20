import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { HEADER, HighLightProp } from "@/types/types";
import { AppContext } from "@/context/ApiContext";
import cn from "classnames";
import Link from "next/link";

export type SidebarProps = {
  onClick: () => void;
  isOpen: boolean;
};

const twc = {
  sidebarContainer:
    "top-0 right-0 pl-25px background-sidebar z-10 w-full fixed h-screen ease-in-out duration-500",
  iconContainer: "bg-white w-full h-full",
  icon: "p-6 flex justify-end h-20",
  labelContainer: "px-10 py-11 ",
  label: "plex-mono font-normal text-xl leading-5 text-dark-green z-[1] pb-10 block",
  buttonStyle:
    "px-6 pt-9px pb-11px text-center bg-teal z-[5] text-base leading-5 text-white rounded-lg",
};

export const Sidebar = ({ onClick, isOpen }: SidebarProps) => {
  const { data } = useContext(AppContext);
  const { highlights } = data;
  useEffect(() => {
    const body: any = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <div
      className={cn(twc.sidebarContainer, {
        "translate-x-0 overflow-y-": isOpen,
        "translate-x-full": !isOpen,
      })}
    >
      <div className={twc.iconContainer}>
        <div className={twc.icon}>
          <CloseIcon onClick={onClick} />
        </div>
        <ul className={cn(twc.labelContainer, {})}>
          <Link href="/" className={twc.label}>Home</Link>
          {highlights?.map((d: HighLightProp) => {
            return (
              <Link
                href={`/activities/${d.title}`}
                key={d.title}
                className={twc.label}
              >
                {d.title}
              </Link>
            );
          })}
          <li>
            <button className={twc.buttonStyle}>{HEADER.BUTTON_LABEL}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
