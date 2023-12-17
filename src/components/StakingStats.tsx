import Image from "next/image";

// Assets :

import { FaArrowTrendUp } from "react-icons/fa6";
import greenChart from "@assets/images/greenChart.png";
import { useTranslation } from "react-i18next";

const StakingStats = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-20 py-16">
      <h5 className="montrealMedium mb-4 text-4xl text-[#F7E16B]">
        {t('stakingstats')}
      </h5>
      <div className="flex h-fit w-full flex-row items-stretch justify-center gap-3">
        <div className="flex flex-grow w-1/2 flex-col items-center justify-center overflow-hidden rounded-xl border border-[#34313C] bg-[#24222A] p-6">
          <h5 className="montrealMedium mb-8 text-center text-2xl text-whiteText-500">
            {t('topholders')}
          </h5>
          <div className="mb-2 flex h-fit w-full flex-row items-center justify-between">
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-3">
              <div className="flex aspect-square w-10 flex-row items-center justify-center rounded-full bg-[#F7E16B]">
                <p className="montreal text-center text-2xl text-black">1</p>
              </div>
              <h5 className="montreal text-xl text-white">09324414</h5>
            </div>
            <h5 className="montreal text-xl text-[#F7E16B]">09324414</h5>
          </div>
          <div className="mb-2 flex h-fit w-full flex-row items-center justify-between">
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-3">
              <div className="flex aspect-square w-10 flex-row items-center justify-center rounded-full bg-[#F7E16B]">
                <p className="montreal text-center text-2xl text-black">2</p>
              </div>
              <h5 className="montreal text-xl text-white">09324414</h5>
            </div>
            <h5 className="montreal text-xl text-[#F7E16B]">09324414</h5>
          </div>
          <div className="mb-2 flex h-fit w-full flex-row items-center justify-between">
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-3">
              <div className="flex aspect-square w-10 flex-row items-center justify-center rounded-full bg-[#F7E16B]">
                <p className="montreal text-center text-2xl text-black">3</p>
              </div>
              <h5 className="montreal text-xl text-white">09324414</h5>
            </div>
            <h5 className="montreal text-xl text-[#F7E16B]">09324414</h5>
          </div>
          <div className="mb-2 flex h-fit w-full flex-row items-center justify-between">
            <div className="flex h-fit w-fit flex-row items-center justify-start gap-3">
              <div className="flex aspect-square w-10 flex-row items-center justify-center rounded-full bg-[#F7E16B]">
                <p className="montreal text-center text-2xl text-black">4</p>
              </div>
              <h5 className="montreal text-xl text-white">09324414</h5>
            </div>
            <h5 className="montreal text-xl text-[#F7E16B]">09324414</h5>
          </div>
        </div>

        <div className="flex flex-grow w-1/2 flex-col items-center justify-center overflow-hidden rounded-xl border border-[#34313C] bg-[#24222A] p-6">
          <div className="flex h-fit w-full flex-row items-center justify-between">
            <h5 className="montreal whitespace-nowrap text-lg text-white">
              {t('price')}
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
      </div>
    </section>
  );
};

export default StakingStats;
