import Image from "next/image";
import Link from "next/link";

// Assets :
import { FaPlus } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import mktCap from '@assets/images/mktCap.png'
import { useTranslation } from "react-i18next";

const MarketCap = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="flex h-fit w-full flex-col items-center justify-center py-10">
      <div className="flex h-fit w-11/12 lg:w-6/12 flex-col lg:flex-row items-center lg:items-stretch justify-between">
        <div className="flex w-full lg:w-1/2 flex-grow flex-col items-center lg:items-start justify-center">
          <h5 className="montreal mb-4 text-sm text-white opacity-50">
            USDT STATS
          </h5>
          <h5 className="montrealBold mb-2 text-3xl text-[#F7E16B]">
            {t('authentic')}
          </h5>
          <h5 className="montrealBold text-3xl text-center lg:text-left text-white">
          {t('sourced')}
          </h5>
          <div className="my-8 flex h-fit w-fit flex-row items-center justify-between gap-3">
            <button className="aspect-square h-fit rounded-full bg-whiteBackground-500 p-2">
              <FaPlus color="#000000" size={20} />
            </button>
            <button className="aspect-square h-fit rounded-full bg-whiteBackground-500 p-2">
              <MdCompareArrows color="#000000" size={20} />
            </button>
          </div>
        </div>
        <div className="w-10/12 lg:w-1/2 h-fit flex flex-row items-center justify-center flex-grow mt-6 lg:mt-0">
            <Image src={mktCap} alt="market cap" ></Image>
        </div>
      </div>
    </section>
  );
};

export default MarketCap;
