import Image from "next/image";
import Link from "next/link";

// Components :
import { useTranslation } from "react-i18next";

// Assets :
import logo from "@assets/images/lg.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="flex h-fit w-full flex-col items-center justify-center bg-[#141315] py-6 ">
      <Link href={"/"}>
        <Image src={logo} alt="coliseum" className=" lg:scale-[0.6]"></Image>
      </Link>

      <div className="my-8 flex flex-col items-center justify-evenly gap-8 lg:my-0 lg:flex-row lg:gap-4">
      <Link href={"/"}>
          <h5 className="montreal mb-0 text-2xl text-white lg:text-base">
            {t("home")}
          </h5>
        </Link>
        <Link href={"/trade"}>
          <h5 className="montreal mb-0 text-2xl text-white lg:text-base">
            {t("trade")}
          </h5>
        </Link>
        <Link href={"/stake"}>
          <h5 className="montreal mb-0 text-2xl text-white lg:text-base">
            {t("stake")}
          </h5>
        </Link>
        <Link href={"/about"}>
          <h5 className="montreal mb-0 text-2xl text-white lg:text-base">
            {t("about")}
          </h5>
        </Link>
        <Link href={"/profile"}>
          <h5 className="montreal mb-0 text-2xl text-white lg:text-base">
            {t("profile")}
          </h5>
        </Link>
      </div>
      
      <h5 className="montreal my-6 text-center text-base text-white opacity-50">
        {t("copyright")}
      </h5>
    </footer>
  );
};

export default Footer;
