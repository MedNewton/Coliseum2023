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

const Hero = () => {

  const { t, i18n } = useTranslation();


  return (
    <section>
      <Navbar />
      <div className="mt-40 flex h-fit w-full flex-row items-start justify-start pl-16">
        <div className="flex h-fit  w-7/12 flex-col items-start justify-start pt-20">
          <h5 className=" montreal mb-3 text-2xl text-whiteText-500">
            {t('firsthead')}
          </h5>
          <h5 className=" montrealBold text-6xl text-[#F7E16B] ">
            {t('secondhead')}
          </h5>
          <div className="my-16 flex h-fit w-fit flex-col items-start justify-center gap-5">
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaRegCheckCircle size={25} color="#F7E16B" />
              <h5 className="montreal text-xl text-whiteText-500">
                {t('heroLine1')}
              </h5>
            </div>
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaRegCheckCircle size={25} color="#F7E16B" />
              <h5 className="montreal text-xl text-whiteText-500">
              {t('heroLine2')}
              </h5>
            </div>
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaRegCheckCircle size={25} color="#F7E16B" />
              <h5 className="montreal text-xl text-whiteText-500">
              {t('heroLine3')}
              </h5>
            </div>
          </div>
          <div className="flex h-fit w-fit flex-row items-center justify-around gap-6">
            <button className="montrealMedium flex flex-row items-center justify-center rounded-lg bg-white px-8 py-3 uppercase text-[#1F1D26] ">
              {t('tradingbutton')}
            </button>
            <button className="montrealMedium flex flex-row items-center justify-center gap-2 rounded-lg border border-white px-6 py-3 uppercase text-white ">
              <BsPlayCircle color="#FFFFFF" size={25} stroke={1} />
              <span>{t('watch')}</span>
            </button>
          </div>
        </div>
        <div className="flex h-fit w-5/12 flex-row items-center justify-end p-0">
          {<BigCircles />}
        </div>
      </div>
      <div className="flex h-fit w-full flex-row items-center justify-center -mt-32">
        <div className="mb-20 flex h-fit w-6/12 flex-row items-center justify-between rounded-xl bg-[#24222A] px-12 py-8 shadow-sm shadow-[#24222A]">
          <div className="flex h-fit w-3/5 flex-col items-start justify-end gap-2">
            <h5 className="montrealMedium text-2xl text-[#F7E16B] ">
              {t('downloadhead1')}
              <br />
              {t('downloadhead2')}
            </h5>
            <p className="montreal w-11/12 text-lg text-whiteText-500">
              📥 {t('downloadparagraph')} 🚀
            </p>
            <button className="montrealMedium mt-8 flex h-fit w-fit flex-row items-center justify-center gap-2 rounded-xl bg-whiteBackground-500 py-3 px-3">
              <FiDownload color="#1F1D26" size={22} />
              <h5 className=" text-base uppercase text-[#1F1D26]">
                {t('downloadbutton')}
              </h5>
            </button>
          </div>
          <div className="flex h-full w-2/5 flex-col items-center justify-center">
            <Image src={book} alt="whitepaper" className=" scale-75"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
