import Image from "next/image";
import Link from "next/link";

// Components :
import { useTranslation } from "react-i18next";

// Assets :
import logo from "@assets/images/logo.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="flex h-fit w-full flex-col items-center justify-center bg-[#141315] py-6 ">
      <Image src={logo} alt="coliseum" className=" scale-[0.6] "></Image>
      <div className="my-4 flex flex-row items-center justify-evenly gap-4">
        <Link href={"/trade"}>
          <h5 className="montreal mb-0 text-base text-white">{t("trade")}</h5>
        </Link>
        <Link href={"/stake"}>
          <h5 className="montreal mb-0 text-base text-white">{t("stake")}</h5>
        </Link>
        <Link href={"/about"}>
          <h5 className="montreal mb-0 text-base text-white">{t("about")}</h5>
        </Link>
        <Link href={""}>
          <h5 className="montreal mb-0 text-base text-white">Contact Us</h5>
        </Link>
        <Link href={""}>
          <h5 className="montreal mb-0 text-base text-white">Privacy Policy</h5>
        </Link>
        <Link href={""}>
          <h5 className="montreal mb-0 text-base text-white">
            Terms & Conditions
          </h5>
        </Link>
      </div>
      <h5 className="montreal text-center text-base text-white opacity-50 my-3">
        Media inquires for CMax - Contact media@cmax.com
      </h5>
      <h5 className="montreal mb-0 text-center text-base text-white opacity-50">
      Copy Right 2023 - CMax. All Rights Reserved
      </h5>
    </footer>
  );
};

export default Footer;
