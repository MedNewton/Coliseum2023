import Image from "next/image";
import Link from "next/link";

// Components :
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Assets :
import icon1 from "@assets/images/inclusion.png";
import icon2 from "@assets/images/effortless.png";
import icon3 from "@assets/images/security.png";
import icon4 from "@assets/images/fees.png";
import icon5 from "@assets/images/contract.png";
import icon6 from "@assets/images/control.png";
import { useTranslation } from "react-i18next";

const DiscoverSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="my-6 flex h-fit w-full flex-col items-center justify-center bg-[#24222A] py-16 px-3">
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        {t("discoverbenefit")}
      </h5>
      <p className="montreal mb-12 mt-6 w-11/12 text-center text-lg text-whiteText-500 lg:w-7/12">
        {t("discoverparagraph")}
      </p>
      <div className="hidden h-fit w-7/12 flex-col items-center justify-start gap-3 lg:flex">
        <div className="mb-3 flex h-fit flex-row items-stretch justify-between gap-3">
          <div className="w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-6">
            <div className="mb-8 flex h-fit w-full flex-row items-center justify-between gap-4">
              <Image
                src={icon1}
                alt="financial inclusion"
                width={80}
                height={80}
              ></Image>
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                {t("benefithead")}
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              {t("benefitparagraphone")}
            </p>
          </div>
          <div className="w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-6">
            <div className="mb-8 flex h-fit w-full flex-row items-center justify-between gap-4">
              <Image
                src={icon2}
                alt="financial inclusion"
                width={80}
                height={80}
              ></Image>
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                {t("benefitheadtwo")}
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              {t("benefitparagraphtwo")}
            </p>
          </div>
        </div>
        <div className="mb-3 flex h-fit flex-row items-stretch justify-between gap-3">
          <div className="w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-8">
            <div className="mb-8 flex h-fit w-full flex-row items-center justify-start gap-4">
              <Image
                src={icon3}
                alt="financial inclusion"
                width={80}
                height={80}
              ></Image>
              <h5 className="montrealMedium whitespace-break-spaces text-left text-3xl text-[#F7E16B]">
                {t("benefitheadfour")}
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              t{t("benefitparagraphfour")}
            </p>
          </div>
          <div className="w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-8">
            <div className="mb-8 flex h-fit w-full flex-row items-center justify-start gap-4">
              <Image
                src={icon4}
                alt="financial inclusion"
                width={80}
                height={80}
              ></Image>
              <h5 className="montrealMedium whitespace-break-spaces text-left text-3xl text-[#F7E16B]">
                {t("benefitheadfive")}
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              {t("benefitparagraphfive")}
            </p>
          </div>
        </div>
        <div className="flex h-fit flex-row items-stretch justify-between gap-3">
          <div className="w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-8">
            <div className="mb-8 flex h-fit w-full flex-row items-center justify-start gap-4">
              <Image
                src={icon5}
                alt="financial inclusion"
                width={80}
                height={80}
              ></Image>
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                {t("benefitheadthree")}
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              {t("benefitparagraphthree")}
            </p>
          </div>
          <div className="w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-6">
            <div className="mb-8 flex h-fit w-full flex-row items-center justify-start gap-4">
              <Image
                src={icon6}
                alt="financial inclusion"
                width={80}
                height={80}
              ></Image>
              <h5 className="montrealMedium whitespace-break-spaces text-left text-3xl text-[#F7E16B]">
                {t("benefitheadsix")}
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              {t("benefitparagraphsix")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start lg:hidden">
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
        >
          <div className="flex h-fit flex-col items-center justify-center gap-8">
            <div className="h-fit w-full rounded-xl border border-[#5C5667] bg-[#343238] p-6">
              <div className="mb-8 flex w-full flex-col items-start justify-start gap-1">
                <div className="h-30 w-30">
                  <Image
                    src={icon1}
                    alt="financial inclusion"
                    className="m-0"
                  ></Image>
                </div>

                <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                  {t("benefithead")}
                </h5>
              </div>
              <p className="montreal w-11/12 text-left text-xl leading-normal text-whiteText-500 lg:text-lg">
                {t("benefitparagraphone")}
              </p>
            </div>
            <div className="w-full flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-6">
              <div className="mb-8 flex h-fit w-full flex-col items-start justify-start gap-4">
                <div className="h-30 w-30">
                  <Image
                    src={icon2}
                    alt="financial inclusion"
                    className="m-0"
                  ></Image>
                </div>
                <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                  {t("benefitheadtwo")}
                </h5>
              </div>
              <p className="montreal w-11/12 text-left text-xl lg:text-lg leading-normal text-whiteText-500">
                {t("benefitparagraphtwo")}
              </p>
            </div>
          </div>
          <div className="flex h-fit flex-col items-center justify-center gap-8">
            <div className="w-full flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-8">
              <div className="mb-8 flex h-fit w-full flex-col items-start justify-start gap-4">
                <div className="h-30 w-30">
                  <Image
                    src={icon3}
                    alt="financial inclusion"
                    className="m-0"
                  ></Image>
                </div>
                <h5 className="montrealMedium whitespace-break-spaces text-left text-3xl text-[#F7E16B]">
                  {t("benefitheadfour")}
                </h5>
              </div>
              <p className="montreal w-11/12 text-left text-xl lg:text-lg leading-normal text-whiteText-500">
                t{t("benefitparagraphfour")}
              </p>
            </div>
            <div className="w-full flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-8">
              <div className="mb-8 flex h-fit w-full flex-col items-start justify-start gap-4">
                <div className="h-30 w-30">
                  <Image
                    src={icon4}
                    alt="financial inclusion"
                    className="m-0"
                  ></Image>
                </div>
                <h5 className="montrealMedium whitespace-break-spaces text-left text-3xl text-[#F7E16B]">
                  {t("benefitheadfive")}
                </h5>
              </div>
              <p className="montreal w-11/12 text-left text-xl leading-normal text-whiteText-500 lg:text-lg">
                {t("benefitparagraphfive")}
              </p>
            </div>
          </div>
          <div className="flex h-fit flex-col items-center justify-center gap-8">
            <div className="w-full flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-8">
              <div className="mb-8 flex h-fit w-full flex-col items-start justify-start gap-4">
                <div className="h-30 w-30">
                  <Image
                    src={icon5}
                    alt="financial inclusion"
                    className="m-0"
                  ></Image>
                </div>
                <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                  {t("benefitheadthree")}
                </h5>
              </div>
              <p className="montreal w-11/12 text-left text-xl leading-normal text-whiteText-500 lg:text-lg">
                {t("benefitparagraphthree")}
              </p>
            </div>
            <div className="w-full flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-6">
              <div className="mb-8 flex h-fit w-full flex-col items-start justify-start gap-4">
                <div className="h-30 w-30">
                  <Image
                    src={icon6}
                    alt="financial inclusion"
                    className="m-0"
                  ></Image>
                </div>
                <h5 className="montrealMedium whitespace-break-spaces text-left text-3xl text-[#F7E16B]">
                  {t("benefitheadsix")}
                </h5>
              </div>
              <p className="montreal w-11/12 text-left text-xl leading-normal text-whiteText-500 lg:text-lg">
                {t("benefitparagraphsix")}
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default DiscoverSection;
