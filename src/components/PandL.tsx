import Image from "next/image";

// Assets :
import bigChart from "@assets/images/bigChart.png";
import { MdCompareArrows } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

const PandL = () => {
  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-36 pb-16">
      <div className="flex h-fit w-full flex-col items-stretch justify-center overflow-hidden rounded-xl border border-[#34313C] bg-[#24222A] p-6">
        <div className="flex h-fit w-full flex-row items-center justify-center gap-3">
          <h5 className="montrealMedium text-xl capitalize text-[#F7E16B]">
            P&L
          </h5>
          <div className="flex h-fit w-fit flex-row items-center justify-start gap-2 py-1 px-2 bg-[#3E4057] rounded-lg">
              <FaArrowTrendUp size={22} color="#FFF931" />

              <h5 className="montreal text-base text-white">+24%</h5>
            </div>
        </div>
        <Image src={bigChart} alt="chart" className=" scale-75"></Image>
      </div>
    </section>
  );
};

export default PandL;
