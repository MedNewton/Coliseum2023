import Image from "next/image";
import Link from "next/link";

// Assets :
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

import greenChart from "@assets/images/greenChart.png";
import redChart from "@assets/images/redChart.png";
import grayChart from "@assets/images/grayChart.png";
import { useTranslation } from "react-i18next";

const TIFGrid = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="flex h-fit w-full flex-col items-center justify-start pb-20 pt-44">
      <div className="flex w-8/12 flex-row items-center justify-end gap-3 px-2 mb-4">
        <IoSearchOutline size={30} color="#FFFFFF" />
        <h5 className="montrealMedium text-lg text-white">
          {t('search')}
        </h5>
      </div>
      <div className="flex h-fit w-8/12 flex-row items-center justify-center gap-3 mb-3">
        <div className="h-fit w-1/3 rounded-xl border border-[#34313C] bg-[#24222A] p-6">
          <div className="flex h-fit w-full flex-row items-center justify-between">
            <h5 className="montreal whitespace-nowrap text-lg text-white">
              Tita ETF
            </h5>
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaArrowTrendUp size={22} color="#FFF931" />

              <h5 className="montreal text-base text-white">8%</h5>
            </div>
          </div>
          <div className="my-4 flex h-fit w-full flex-row items-center justify-center">
            <Image src={greenChart} alt="chart"></Image>
          </div>
        </div>
        <div className="h-fit w-1/3 rounded-xl border border-[#34313C] bg-[#24222A] p-6">
          <div className="flex h-fit w-full flex-row items-center justify-between">
            <h5 className="montreal whitespace-nowrap text-lg text-white">
              Tusa ETF
            </h5>
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaArrowTrendDown size={22} color="#EB4D4D" className="" />

              <h5 className="montreal text-base text-white">17%</h5>
            </div>
          </div>
          <div className="my-4 flex h-fit w-full flex-row items-center justify-center">
            <Image src={redChart} alt="chart"></Image>
          </div>
        </div>
        <div className="h-fit w-1/3 rounded-xl border border-[#34313C] bg-[#24222A] p-6">
          <div className="flex h-fit w-full flex-row items-center justify-between">
            <h5 className="montreal whitespace-nowrap text-lg text-white">
              TGerm ETF
            </h5>
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
              <FaArrowTrendDown size={22} color="#EB4D4D" className="" />

              <h5 className="montreal text-base text-white">12%</h5>
            </div>
          </div>
          <div className="my-4 flex h-fit w-full flex-row items-center justify-center">
            <Image src={redChart} alt="chart"></Image>
          </div>
        </div>
      </div>
      <div className="mb-3 flex h-fit w-8/12 flex-row items-center justify-center gap-3">
        <div className="h-fit w-1/3 rounded-xl border border-[#34313C] bg-[#24222A] p-6">
          <div className="flex h-fit w-full flex-row items-center justify-between">
            <h5 className="montreal whitespace-nowrap text-lg text-white">
              Coming Soon
            </h5>
          </div>
          <div className="my-4 flex h-fit w-full flex-row items-center justify-center">
            <Image src={grayChart} alt="chart"></Image>
          </div>
        </div>
        <div className="h-fit w-1/3 rounded-xl border border-[#34313C] bg-[#24222A] p-6">
          <div className="flex h-fit w-full flex-row items-center justify-between">
            <h5 className="montreal whitespace-nowrap text-lg text-white">
              Coming Soon
            </h5>
          </div>
          <div className="my-4 flex h-fit w-full flex-row items-center justify-center">
            <Image src={grayChart} alt="chart"></Image>
          </div>
        </div>
        <div className="h-fit w-1/3 rounded-xl border border-[#34313C] bg-[#24222A] p-6">
          <div className="flex h-fit w-full flex-row items-center justify-between">
            <h5 className="montreal whitespace-nowrap text-lg text-white">
              Coming Soon
            </h5>
          </div>
          <div className="my-4 flex h-fit w-full flex-row items-center justify-center">
            <Image src={grayChart} alt="chart"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TIFGrid;
