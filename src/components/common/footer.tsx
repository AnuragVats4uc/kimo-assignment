import Image from "next/image";

const twc = {
  footerContainer: "bg-dark-green px-4 flex items-center py-22px",
};

export enum FOOTER {
  IMAGE_PATH = "/Alohaback.png",
  ALT = "logo",
}

export const Footer = () => {
  return (
    <div className={twc.footerContainer}>
      <Image
        src={FOOTER.IMAGE_PATH}
        alt={FOOTER.ALT}
        width={100}
        height={100}
      />
    </div>
  );
};
