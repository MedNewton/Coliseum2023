import Image from "next/image";

// Assets :

import bigChart from "@assets/images/bigChart.png";

const Chartbox = () => {
  return (
    <div className="flex flex-col items-center justify-start flex-grow w-full">
      <div className="flex h-fit w-full flex-row items-center justify-between mb-2">
        <h5 className="montrealMedium text-xl text-[#F7E16B] ">Tita ETF</h5>
        <div className="flex h-fit w-fit flex-row items-center justify-start gap-1">
          <h5 className="montrealMedium rounded-lg bg-[#3E4057] px-2 py-1 text-base text-whiteText-500 ">
            128.68
          </h5>
          <div className="flex h-fit w-fit flex-row items-center justify-start rounded-lg bg-[#3E4057] px-2 py-1">
            <h5 className="montrealMedium text-base text-whiteText-500">
              +1,03 | +0,83%
            </h5>
          </div>
          <h5 className="montrealMedium px-2 py-1 text-base text-whiteText-500 ">
            TER → 0.33%
          </h5>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-center rounded-2xl border border-[#24222A] bg-[#24222A] p-4">
        <Image src={bigChart} alt="chart" className=" scale-90"></Image>
      </div>
    </div>
  );
};

export default Chartbox;
