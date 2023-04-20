import Image from "next/image";
import React from "react";

const twc = {
  footerContainer: "bg-dark-green px-4 flex items-center py-22px",
};

export const Footer = () => {
  return (
    <div className={twc.footerContainer}>
      <Image src="/AlohaBack.png" alt="" width={100} height={100} />
    </div>
  );
};
