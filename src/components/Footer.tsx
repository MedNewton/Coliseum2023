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
      <Link href={"/"}>
        <Image src={logo} alt="coliseum" className=" lg:scale-[0.6]"></Image>
      </Link>

      <div className="my-8 lg:my-0 flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-4">
        <Link href={"/trade"}>
          <h5 className="montreal mb-0 text-2xl lg:text-base text-white">{t("trade")}</h5>
        </Link>
        <Link href={"/stake"}>
          <h5 className="montreal mb-0 text-2xl lg:text-base text-white">{t("stake")}</h5>
        </Link>
        <Link href={"/about"}>
          <h5 className="montreal mb-0 text-2xl lg:text-base text-white">{t("about")}</h5>
        </Link>
        <Link href={""}>
          <h5 className="montreal mb-0 text-2xl lg:text-base text-white">
            {t('contact')}
          </h5>
        </Link>
        <Link href={""}>
          <h5 className="montreal mb-0 text-2xl lg:text-base text-white">
            {t('policy')}
          </h5>
        </Link>
        <Link href={""}>
          <h5 className="montreal mb-0 text-2xl lg:text-base text-white">
            {t('conditions')}
          </h5>
        </Link>
      </div>
      <h5 className="montreal my-3 text-center text-base text-white opacity-50">
        {t('inquiry')}
      </h5>
      <h5 className="montreal mb-0 text-center text-base text-white opacity-50">
        {t('copyright')}
      </h5>
    </footer>
  );
};

export default Footer;
