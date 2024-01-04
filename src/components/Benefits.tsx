import Image from "next/image";

// Components :

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Assets :

import rewards from "@assets/images/rewards.png";
import security from "@assets/images/networkSecurity.png";
import appreciation from "@assets/images/appreciation.png";
import liquidity from "@assets/images/liquidity.png";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-4 py-16 lg:px-20">
      <h5 className="montrealBold mb-4 text-4xl text-[#F7E16B]">
        {t("stakebenefit")}
      </h5>
      <p className="montrealMedium mb-8 w-full text-xl leading-normal text-white lg:w-10/12">
        {t("stakebenefitparagraph")}
      </p>
      <Carousel
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        autoPlay
        infiniteLoop={true}
        swipeable
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        className="benefitsCarousel block lg:hidden"
      >
        <div className="flex h-fit w-full flex-col items-center justify-between gap-3 rounded-xl border border-[#5C5667] bg-[#343238] px-6 py-16">
          <div className="h-40 w-40">
            <Image src={rewards} alt="earning rewards"></Image>
          </div>

          <h5 className="montrealBold mt-10 text-center text-xl text-whiteText-500">
            {t("earningreward")}
          </h5>
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-between gap-3 rounded-xl border border-[#5C5667] bg-[#343238] px-6 py-16">
          <div className="h-40 w-40">
            <Image src={security} alt="earning rewards"></Image>
          </div>
          <h5 className="montrealBold mt-10 text-center text-xl text-whiteText-500">
            {t("network")}
          </h5>
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-between gap-3 rounded-xl border border-[#5C5667] bg-[#343238] px-6 py-16">
          <div className="h-40 w-40">
            <Image src={appreciation} alt="earning rewards"></Image>
          </div>
          <h5 className="montrealBold mt-10 text-center text-xl text-whiteText-500">
            {t("token")}
          </h5>
        </div>
        <div className="flex w-full flex-grow flex-col items-center justify-between gap-3 rounded-xl border border-[#5C5667] bg-[#343238] py-16">
          <div className="h-40 w-40">
            <Image src={liquidity} alt="earning rewards"></Image>
          </div>
          <h5 className="montrealBold mt-10 text-center text-xl text-whiteText-500">
            {t("liquidity")}
          </h5>
        </div>
      </Carousel>
      <div className="hidden h-fit w-full flex-row items-stretch justify-center rounded-xl border border-[#5C5667] bg-[#343238] p-6 lg:flex">
        <div className="flex w-1/4 flex-grow flex-col items-center justify-between gap-3 ">
          <Image
            src={rewards}
            alt="earning rewards"
            width={80}
            height={80}
          ></Image>
          <h5 className="montrealBold text-center text-xl text-whiteText-500">
            {t("earningreward")}
          </h5>
        </div>
        <div className="flex w-1/4 flex-grow flex-col items-center justify-between gap-3">
          <Image
            src={security}
            alt="earning rewards"
            width={80}
            height={80}
          ></Image>
          <h5 className="montrealBold text-center text-xl text-whiteText-500">
            {t("network")}
          </h5>
        </div>
        <div className="flex w-1/4 flex-grow flex-col items-center justify-between gap-3">
          <Image
            src={appreciation}
            alt="earning rewards"
            width={80}
            height={80}
          ></Image>
          <h5 className="montrealBold text-center text-xl text-whiteText-500">
            {t("token")}
          </h5>
        </div>
        <div className="flex w-1/4 flex-grow flex-col items-center justify-between gap-3">
          <Image
            src={liquidity}
            alt="earning rewards"
            width={80}
            height={80}
          ></Image>
          <h5 className="montrealBold text-center text-xl text-whiteText-500">
            {t("liquidity")}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
