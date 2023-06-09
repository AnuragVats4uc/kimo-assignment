import React from "react";

export const CloseIcon = ({onClick}:any) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <mask
        id="mask0_5_173"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <rect width="40" height="40" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_5_173)">
        <path
          d="M10.6667 31.6667L8.33337 29.3333L17.6667 20L8.33337 10.6667L10.6667 8.33333L20 17.6667L29.3334 8.33333L31.6667 10.6667L22.3334 20L31.6667 29.3333L29.3334 31.6667L20 22.3333L10.6667 31.6667Z"
          fill="#001A1A"
        />
      </g>
    </svg>
  );
};
