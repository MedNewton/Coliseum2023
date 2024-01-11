import Image from "next/image";
import Link from "next/link";

// Assets :
import icon1 from "@assets/images/chainlink.png";
import icon2 from "@assets/images/layerZero.png";
import { useTranslation } from "react-i18next";

const TechnologySection = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="my-6 flex h-fit w-full flex-col items-center justify-center py-16 px-3 lg:px-0">
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        {t('technologyhead')}
      </h5>
      <p className="montreal mb-12 mt-6 w-11/12 md:w-10/12 xl:w-7/12 text-center text-lg text-whiteText-500">
        {t('technologyParagraph')}
      </p>
      <div className="h-fit w-full md:w-10/12 xl:w-6/12 flex-col items-center justify-start gap-3">
        <div className="mb-3 flex h-fit flex-col lg:flex-row items-center lg:items-stretch justify-between gap-3">
          <div className="w-full lg:w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-6">
            <div className="mb-8 flex h-fit w-full flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <Image
                src={icon1}
                alt="financial inclusion"
                width={80}
                height={80}
              ></Image>
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                {t('chainlinkhead')}
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-xl lg:text-lg leading-normal text-whiteText-500">
            {t('chainLinkOracle')}
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-6">
            <div className="mb-8 flex h-fit w-full lg:flex-row flex-col items-start lg:items-center justify-between gap-4">
              <Image
                src={icon2}
                alt="financial inclusion"
                width={60}
                height={60}
              ></Image>
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                {t('layerzerohead')}
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-xl lg:text-lg leading-normal text-whiteText-500">
            {t('layerZeroText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
