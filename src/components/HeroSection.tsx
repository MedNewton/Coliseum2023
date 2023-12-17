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
import smallCircles from '@assets/images/smallCircles.png'

const Hero = () => {

  const { t, i18n } = useTranslation();


  return (
    <section>
      <Navbar />
      <div className="mt-40 lg:bg-transparent flex h-fit w-full flex-row items-start justify-start px-4 lg:pl-16">
        <div className="flex h-fit  xl:w-7/12 flex-col items-start justify-start lg:pt-20 relative z-50">
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
            <button className="montrealMedium flex flex-row items-center justify-center rounded-lg bg-white text-sm lg:text-base px-8 py-3 uppercase text-[#1F1D26] ">
              {t('tradingbutton')}
            </button>
            <button className="montrealMedium flex flex-row items-center justify-center gap-2 rounded-lg text-sm lg:text-base border border-white px-6 py-3 uppercase text-white ">
              <BsPlayCircle color="#FFFFFF" size={25} stroke={1} />
              <span>{t('watch')}</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex h-fit w-5/12 flex-row items-start lg:items-center lg:justify-end p-0">
          {<BigCircles />}
        </div>
        <div id="mobileCircles" className="block lg:hidden absolute w-[45vw] h-[45vw] top-40 overflow-hidden z-0 right-0">
        <Image src={smallCircles} alt="small circles" className="absolute top-0 -right-10"></Image>
        </div>
      </div>
      <div className="flex h-fit w-full flex-row items-center justify-center mt-6 lg:-mt-32 px-3 lg:px-0">
        <div className="mb-20 flex h-fit w-full lg:w-6/12 flex-col lg:flex-row items-center justify-between rounded-xl bg-[#24222A] px-4 lg:px-12 py-14 lg:py-8 shadow-sm shadow-[#24222A]">
          <div className="flex h-fit w-full lg:w-3/5 flex-col items-start justify-end gap-2">
            <h5 className="montrealMedium text-center lg:text-left text-2xl text-[#F7E16B] w-full">
              {t('downloadhead1')}
              <br />
              {t('downloadhead2')}
            </h5>
            
            <p className="montreal text-center lg:text-left w-11/12 mx-auto lg:m-0 lg:w-11/12 text-lg text-whiteText-500">
              📥 {t('downloadparagraph')} 🚀
            </p>
            <div className="lg:hidden flex h-full w-2/5 mx-auto flex-col items-center justify-center">
            <Image src={book} alt="whitepaper" className=" scale-75"></Image>
          </div>
            <button className="montrealMedium mx-auto lg:m-0 mt-8 flex h-fit w-fit flex-row items-center justify-center gap-2 rounded-xl bg-whiteBackground-500 py-3 px-3">
              <FiDownload color="#1F1D26" size={22} />
              <h5 className=" text-base uppercase text-[#1F1D26]">
                {t('downloadbutton')}
              </h5>
            </button>
          </div>
          <div className="hidden lg:flex h-full w-2/5 flex-col items-center justify-center">
            <Image src={book} alt="whitepaper" className=" scale-75"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
