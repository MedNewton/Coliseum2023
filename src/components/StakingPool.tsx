import Image from "next/image";

// Assets :
import bigChart from '@assets/images/bigChart.png'
import { MdCompareArrows } from "react-icons/md";
import { useTranslation } from "react-i18next";

const StakingPool = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-4 lg:px-20 pb-16 lg:py-16">
      <h5 className="montrealMedium mb-4 text-4xl text-[#F7E16B]">
        {t('stakingpool')}
      </h5>
      <div className="flex h-fit w-full flex-col items-stretch justify-center overflow-hidden rounded-xl border border-[#34313C] bg-[#24222A] p-6">
        <div className="w-full h-fit flex flex-row items-center justify-center gap-5">
            <div className="flex flex-row items-center justify-center gap-2 border-[1px] py-2 px-4 rounded-xl border-white ">
                <div className="w-3 h-3 rounded-full bg-[#0CE770] "></div>
                <p className="text-lg montrealMedium text-whiteText-500">Stake</p>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 border-[1px] py-2 px-4 rounded-xl border-white ">
                <div className="w-3 h-3 rounded-full bg-[#FF6868] "></div>
                <p className="text-lg montrealMedium text-whiteText-500">Unstake</p>
            </div>
        </div>
        <Image src={bigChart} alt="chart" className=" scale-90 mt-4 lg:mt-0 lg:scale-75"></Image>
      </div>
    </section>
  );
};

export default StakingPool;
