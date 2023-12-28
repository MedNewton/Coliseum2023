import Image from "next/image";
import Link from "next/link";

// Components :
import Navbar from "./navbar";
import { useTranslation } from "react-i18next";

// Assets :
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import book from "@assets/images/book.png";

import BigCircles from "@/assets/images/bigCircles";
import smallCircles from "@assets/images/smallCircles.png";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section>
      <Navbar />
      <div className="mt-40 flex h-fit w-full flex-row items-start justify-start px-4 lg:pr-0 lg:bg-transparent lg:pl-16">
        <div className="relative z-50  flex h-fit flex-col items-start justify-start lg:pt-20 xl:w-7/12">
          <h5 className=" montreal mb-3 text-2xl w-11/12 text-whiteText-500">
           {t("firsthead")}
          </h5>
          <h5 className=" montrealBold text-6xl text-[#F7E16B] w-10/12 ">
            {t("secondhead")}
          </h5>
          <div className="my-16 flex h-fit w-fit flex-col items-start justify-center gap-5">
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaRegCheckCircle size={25} color="#F7E16B" />
              <h5 className="montreal text-xl text-whiteText-500 w-10/12">
                {t("heroLine1")}
              </h5>
            </div>
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaRegCheckCircle size={25} color="#F7E16B" />
              <h5 className="montreal text-xl text-whiteText-500 w-10/12">
                {t("heroLine2")}
              </h5>
            </div>
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaRegCheckCircle size={25} color="#F7E16B" />
              <h5 className="montreal text-xl text-whiteText-500 w-10/12">
                {t("heroLine3")}
              </h5>
            </div>
          </div>
          <div className="flex h-fit w-fit flex-row items-center justify-around gap-6">
            <Link href="/trade">
              <button className="montrealMedium flex flex-row items-center justify-center rounded-lg bg-white px-8 py-3 text-sm uppercase text-[#1F1D26] lg:text-base ">
                {t("tradingbutton")}
              </button>
            </Link>
            <Link
              target="_blank"
              href="https://www.dropbox.com/scl/fi/m9f30jfzlspuduiqxrpr5/VIDEO-2023-11-27-16-49-32.mp4?rlkey=l9ioyqh06f7k3plqvifhqgoo0&dl=0"
            >
              <button className="montrealMedium flex flex-row items-center justify-center gap-2 rounded-lg border border-white px-6 py-3 text-sm uppercase text-white lg:text-base ">
                <BsPlayCircle color="#FFFFFF" size={25} stroke={1} />
                <span>{t("watch")}</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden h-fit w-5/12 flex-row items-start p-0 lg:flex lg:items-center lg:justify-end">
          {<BigCircles />}
        </div>
        <div
          id="mobileCircles"
          className="absolute right-0 top-40 z-0 block h-[45vw] w-[45vw] overflow-hidden lg:hidden"
        >
          <Image
            src={smallCircles}
            alt="small circles"
            className="absolute -right-10 top-0"
          ></Image>
        </div>
      </div>
      <div className="mt-6 flex h-fit w-full flex-row items-center justify-center px-3 lg:-mt-32 lg:px-0">
        <div className="mb-20 flex h-fit w-full flex-col items-center justify-between rounded-xl bg-[#24222A] px-4 py-14 shadow-sm shadow-[#24222A] lg:w-7/12 lg:flex-row lg:px-12 lg:py-8">
          <div className="flex h-fit w-full flex-col items-start justify-end gap-2 lg:w-3/5">
            <h5 className="montrealMedium w-full text-center text-2xl text-[#F7E16B] lg:text-left">
              {t("downloadhead1")}
              <br />
              {t("downloadhead2")}
            </h5>

            <p className="montreal mx-auto w-11/12 text-center text-lg text-whiteText-500 lg:m-0 lg:w-11/12 lg:text-left">
              📥 {t("downloadparagraph")} 🚀
            </p>
            <div className="mx-auto flex h-full w-2/5 flex-col items-center justify-center lg:hidden">
              <Image src={book} alt="whitepaper" className=" mt-8 lg:mt-0 lg:scale-50"></Image>
            </div>
            <Link href="https://linktr.ee/coliseumcmax" target="_blank" className="mt-8 mx-auto lg:mx-0">
              <button className="montrealMedium mx-auto mt-8 flex h-fit w-fit flex-row items-center justify-center gap-2 rounded-xl bg-whiteBackground-500 px-3 py-3 lg:m-0">
                <FiDownload color="#1F1D26" size={22} />
                <h5 className=" text-base uppercase text-[#1F1D26]">
                  {t("downloadbutton")}
                </h5>
              </button>
            </Link>
          </div>
          <div className="hidden h-full w-2/5 flex-col items-center justify-center lg:flex">
            <Image src={book} alt="whitepaper" className=" scale-75"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
