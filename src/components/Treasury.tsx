import Link from "next/link";
import Image from "next/image";

// Assets :
import shadesBg from "@assets/images/shadesBg1.png";
import logo from "@assets/images/lg.png";
import tita from '@assets/images/tita.png'
import { GoArrowDownRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

const TreasurySection = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className="flex h-fit w-full flex-col items-center justify-start py-10 px-3 lg:px-0">
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        {t('treasuryhead')}
      </h5>
      <p className="montreal mb-12 mt-6 w-11/12 lg:w-7/12 text-center text-lg text-whiteText-500">
        {t('treasuryparagraph')}
      </p>
      <div className="flex h-fit w-full lg:w-7/12 flex-col lg:flex-row items-stretch justify-between gap-2 rounded-xl bg-[#24222A] p-3 lg:p-6 shadow-sm shadow-[#24222A]">
        <div
          className="flex h-fit w-full lg:w-1/2 flex-col items-start justify-center gap-1 rounded-xl bg-cover bg-center bg-no-repeat px-3 py-12"
          style={{
            backgroundImage: `url('${shadesBg.src}')`,
          }}
        >
          <h5 className="montrealMedium capitalize text-4xl text-whiteText-500">
            {t('treasury')}
          </h5>
          <h5 className="montrealMedium text-4xl text-whiteText-500">
            59.000.000,00 €
          </h5>
          <h5 className="montrealMedium text-4xl text-[#F7E16B] ">=</h5>
          <h5 className="montrealMedium text-4xl text-whiteText-500">
            59.000.000,00 €
          </h5>
        </div>
        <div className="flex w-full lg:w-1/2 flex-grow flex-col items-start justify-between gap-2">
          <div className="flex h-1/2 w-full flex-row items-center justify-between rounded-xl bg-[#343238] px-3 py-3 ">
            <div className="flex h-fit w-fit flex-row items-center justify-center gap-3 px-3">
              <Image
                src={logo}
                alt="coliseum logo"
                width={65}
                height={65}
              ></Image>
              <div className="flex h-full w-fit flex-col items-start justify-start gap-3">
                <h5 className="montrealMedium text-xl text-whiteText-500">
                  {t('totaltrading')}
                </h5>
                <h5 className="montrealMedium text-4xl text-[#F7E16B] ">
                  CMAX
                </h5>
              </div>
            </div>
            <div className="flex h-full w-fit flex-col items-end justify-end px-2">
              <GoArrowDownRight size={40} color="#F7E16B" />
            </div>
          </div>
          <div className="flex h-1/2 w-full flex-row items-center justify-between rounded-xl bg-[#343238] px-3 py-3 ">
            <div className="flex h-fit w-fit flex-row items-center justify-center gap-3 px-3">
              <Image
                src={tita}
                alt="coliseum logo"
                className=""
                width={65}
                height={65}
              ></Image>
              <div className="flex h-full w-fit flex-col items-start justify-start gap-3">
                <h5 className="montrealMedium text-xl text-whiteText-500">
                {t('totaltrading')}
                </h5>
                <h5 className="montrealMedium text-4xl text-[#F7E16B] ">
                  CMAX
                </h5>
              </div>
            </div>
            <div className="flex h-full w-fit flex-col items-end justify-end px-2">
              <GoArrowDownRight size={40} color="#F7E16B" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasurySection;
