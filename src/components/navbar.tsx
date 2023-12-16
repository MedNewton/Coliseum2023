/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { ConnectWallet } from "@thirdweb-dev/react";

// Assets :
import logo from "@assets/images/logo.png";
import { useEffect, useState } from "react";
import EnglishFlag from "@assets/images/english.png";
import ItalianFlag from "@assets/images/italian.png";
import FrenchFlag from "@assets/images/french.png";
import GermanFlag from "@assets/images/german.png";
import RussianFlag from "@assets/images/russian.png";
import ChineseFlag from "@assets/images/chinese.png";
import ArabicFlag from "@assets/images/arabic.png";
import PortugueseFlag from "@assets/images/portuguese.png";
import SpanishFlag from "@assets/images/spanish.png";
import { LiaWalletSolid } from "react-icons/lia";
import { IoChevronDown } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100;
      const scrolled = window.scrollY > threshold;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState<{
    name: string;
    image: StaticImageData;
  }>({
    name: "en", // Set English as the default language
    image: EnglishFlag,
  });
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (
    language: string,
    flagImage: StaticImageData,
  ) => {
    setSelectedLanguage({ name: language, image: flagImage });
    localStorage.setItem("lang", language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (
      localStorage.getItem("lang") == "en" ||
      localStorage.getItem("lang") == "" ||
      localStorage.getItem("lang") == " " ||
      !localStorage.getItem("lang")
    ) {
      localStorage.setItem("lang", "en");
      handleLanguageChange("en", EnglishFlag);
    } else if (localStorage.getItem("lang") == "fr") {
      localStorage.setItem("lang", "fr");
      handleLanguageChange("fr", FrenchFlag);
    } else if (localStorage.getItem("lang") == "it") {
      localStorage.setItem("lang", "it");
      handleLanguageChange("it", ItalianFlag);
    } else if (localStorage.getItem("lang") == "ru") {
      localStorage.setItem("lang", "ru");
      handleLanguageChange("ru", RussianFlag);
    } else if (localStorage.getItem("lang") == "ar") {
      localStorage.setItem("lang", "ar");
      handleLanguageChange("ar", ArabicFlag);
    } else if (localStorage.getItem("lang") == "es") {
      localStorage.setItem("lang", "es");
      handleLanguageChange("es", SpanishFlag);
    } else if (localStorage.getItem("lang") == "de") {
      handleLanguageChange("de", GermanFlag);
    } else if (localStorage.getItem("lang") == "pr") {
      handleLanguageChange("pr", PortugueseFlag);
    } else if (localStorage.getItem("lang") == "zh") {
      handleLanguageChange("zh", ChineseFlag);
    }
  }, []);

  return (
    <nav className={`fixed left-0 top-0 z-[9999] flex h-fit w-screen flex-row items-center justify-between px-12 py-6 ${ isScrolled ? 'bg-gradient-to-br from-[#201D26] to-[#1D1B20] shadow-sm shadow-[#5C5667] rounded-b-lg' : 'bg-transparent'}`}>
      <div className="flex flex-row items-center justify-start gap-10">
        <Link href={"/"}>
          <Image src={logo} width={60} height={65} alt=""></Image>
        </Link>
        <div className="flex flex-row items-center justify-evenly gap-8">
          <Link href={"/"}>
            <h5 className="montreal mb-0 text-lg text-white">{t("home")}</h5>
          </Link>
          <Link href={"/"}>
            <h5 className="montreal mb-0 text-lg text-white">{t("trade")}</h5>
          </Link>
          <Link href={"/"}>
            <h5 className="montreal mb-0 text-lg text-white">{t("stake")}</h5>
          </Link>
          <Link href={"/"}>
            <h5 className="montreal mb-0 text-lg text-white">{t("about")}</h5>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-3">
        <div className="flex flex-row items-center justify-center gap-0 rounded-2xl bg-[#ffe500] px-2 py-1">
          <LiaWalletSolid color="#000000" size={30} />
          <ConnectWallet className=" bg-transparent p-0" />
        </div>
        <div className=" flex h-fit w-fit flex-row items-center justify-center gap-2 rounded-lg border border-[#F7E16B] px-2 py-[.7rem] ">
          <FaRegCircleUser size={25} color="#F7E16B" />
          <h5 className="montreal mr-1 text-lg capitalize text-whiteText-500">
            {t("profile")}
          </h5>
        </div>
        <Menu
          align={"end"}
          direction="bottom"
          arrow={true}
          menuButton={
            <MenuButton>
              <div className=" flex h-fit w-fit flex-row items-center justify-center gap-2 rounded-lg border border-[#F7E16B] px-2 py-[.7rem] ">
                <Image
                  src={selectedLanguage.image}
                  alt={selectedLanguage.name}
                  height={20}
                  width={20}
                  className="m-0 p-0"
                />
                <h5 className="montreal mr-1 text-lg uppercase text-whiteText-500">
                  {selectedLanguage.name}
                </h5>
                <IoChevronDown
                  color="#FFFFFF"
                  size={20}
                  className="m-0 h-fit w-fit p-0"
                />
              </div>
            </MenuButton>
          }
          transition
        >
          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "it");
              handleLanguageChange("it", ItalianFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={ItalianFlag}
                alt="English"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>IT</h5>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "en");
              handleLanguageChange("en", EnglishFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={EnglishFlag}
                alt="English"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>EN</h5>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "fr");
              handleLanguageChange("fr", FrenchFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={FrenchFlag}
                alt="English"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>FR</h5>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "de");
              handleLanguageChange("de", GermanFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={GermanFlag}
                alt="german"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>GR</h5>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "es");
              handleLanguageChange("es", SpanishFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={SpanishFlag}
                alt="English"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>ES</h5>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "pr");
              handleLanguageChange("pr", PortugueseFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={PortugueseFlag}
                alt="English"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>PR</h5>
            </div>
          </MenuItem>

          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "ru");
              handleLanguageChange("ru", RussianFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={RussianFlag}
                alt="English"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>RU</h5>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "zh");
              handleLanguageChange("zh", ChineseFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={ChineseFlag}
                alt="English"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>CN</h5>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              localStorage.setItem("lang", "ar");
              handleLanguageChange("ar", ArabicFlag);
            }}
          >
            <div className="flex h-fit w-full flex-row items-center justify-start">
              <Image
                src={ArabicFlag}
                alt="English"
                className="mr-3 aspect-square h-6 w-6"
              />
              <h5 className={` my-0 text-xl text-white`}>AR</h5>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
