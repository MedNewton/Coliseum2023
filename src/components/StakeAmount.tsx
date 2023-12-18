import Image from "next/image";

// Assets :

import bg from "@assets/images/shadesBg1.png";
import { AiOutlineDollar } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const StakeAmount = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="flex h-fit w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-14 lg:flex-row lg:items-stretch lg:px-14"
      style={{
        backgroundImage: `url('${bg.src}')`,
      }}
    >
      <div className="flex w-11/12 flex-col items-center justify-center lg:w-1/2 lg:flex-row ">
        <div className="flex h-fit w-fit flex-col items-start justify-start">
          <div className="mb-4 flex h-fit w-fit flex-row items-center justify-start">
            <h5 className="montrealMedium mr-3 text-2xl text-whiteText-500">
              {t("totalAmount")}
            </h5>
            <h5 className="montreal rounded-xl bg-[#3E4057] p-2 text-base text-[#F7E16B] ">
              4 APR%
            </h5>
          </div>
          <h5 className="montrealMedium text-6xl text-[#F7E16B]">1000 CMAX</h5>
        </div>
      </div>
      <div className=" my-8 flex h-1 w-[90vw] border-t border-dashed border-r-white bg-transparent text-white lg:hidden"></div>
      <div className=" hidden w-[0.5px] flex-grow  border-r border-dashed border-r-white text-white lg:flex"></div>
      <div className="flex w-full flex-row items-center justify-center lg:w-1/2 ">
        <div className="flex h-fit w-full lg:w-fit flex-col items-center justify-start">
          <div className="mb-4 flex h-fit w-fit flex-row items-center justify-start">
            <h5 className="montrealMedium mr-3 text-2xl text-whiteText-500">
              {t("claim")}
            </h5>
          </div>
          <div className=" flex h-fit w-full flex-row items-center justify-center gap-2 rounded-xl bg-[#F7E16B] px-2 py-4 lg:w-fit lg:px-16">
            <AiOutlineDollar size={40} color="#000000" />
            <h5 className="montrealMedium text-3xl text-black">10 USD</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeAmount;
