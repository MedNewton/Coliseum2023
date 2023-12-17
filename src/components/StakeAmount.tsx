import Image from "next/image";

// Assets : 

import bg from "@assets/images/shadesBg1.png";
import { AiOutlineDollar } from "react-icons/ai";
import { useTranslation } from "react-i18next";


const StakeAmount = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="flex h-fit w-full flex-row items-stretch justify-center bg-center bg-cover bg-no-repeat px-14 py-14" style={{
        backgroundImage: `url('${bg.src}')`
    }}>
      <div className="flex w-1/2 flex-row items-center justify-center ">
        <div className="flex h-fit w-fit flex-col items-start justify-start">
          <div className="mb-4 flex h-fit w-fit flex-row items-center justify-start">
            <h5 className="montrealMedium mr-3 text-2xl text-whiteText-500">
              {t('totalAmount')}
            </h5>
            <h5 className="montreal rounded-xl bg-[#3E4057] p-2 text-base text-[#F7E16B] ">
              4 APR%
            </h5>
          </div>
          <h5 className="montrealMedium text-6xl text-[#F7E16B]">1000 CMAX</h5>
        </div>
      </div>

      <div className=" text-white flex-frow w-[0.5px] border-dashed border-r border-r-white"></div>
      <div className="flex w-1/2 flex-row items-center justify-center ">
        <div className="flex h-fit w-fit flex-col items-center justify-start ">
          <div className="mb-4 flex h-fit w-fit flex-row items-center justify-start">
            <h5 className="montrealMedium mr-3 text-2xl text-whiteText-500">
              {t('claim')}
            </h5>
            
          </div>
          <div className="w-fit h-fit px-16 py-4 bg-[#F7E16B] rounded-xl flex flex-row items-center justify-center gap-2">
          <AiOutlineDollar size={40} color="#000000" />
          <h5 className="montrealMedium text-black text-3xl">10 USD</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeAmount;
