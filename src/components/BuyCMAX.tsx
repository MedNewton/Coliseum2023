// Components :
import dynamic from "next/dynamic";
import { darkTheme, Theme } from "@uniswap/widgets";
// Assets :

const SwapWidget = dynamic(
  async () => {
    const res = await import("@uniswap/widgets");
    return res.SwapWidget;
  },
  { ssr: false },
);

import { useTranslation } from "react-i18next";
import { MdCompareArrows } from "react-icons/md";

const BuyCMAX = () => {
  const { t, i18n } = useTranslation();

  const theme: Theme = {
    primary: "#FFF",
    secondary: "#A9A9A9",
    interactive: "#343238",
    container: "#4E4E5A",
    module: "#222633",
    accent: "#F7E16B",
    dialog: "#000",
  };

  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-4 py-16 lg:px-20">
      <div className="flex h-fit w-full flex-col items-start justify-center px-2 py-8 lg:flex-row lg:px-20">
        <div className="flex h-fit w-full flex-col items-start justify-start lg:w-1/2">
          <h5 className="montrealMedium mb-6 text-4xl text-[#F7E16B]">
            {t("buy")} CMAX
          </h5>
          <h5 className="montrealMedium mb-8 text-2xl text-whiteText-500">
            {t("uniswapText")}
          </h5>
          <h5 className="montrealMedium mb-8 text-2xl text-whiteText-500">
            {t("uniswapText2")}
          </h5>
        </div>
        <div className="flex h-fit w-full flex-row items-center justify-end pt-10 lg:w-1/2 lg:pt-0">
          <iframe
            src="https://app.uniswap.org/swap?outputCurrency=0xe6AbA037067A84DC6a21e3eA56918A48e33cb2D7"
            className=" mx-0 mb-1 mt-0 block rounded-2xl border-none h-[600px] w-full lg:w-10/12 overflow-x-hidden"
            id="uniswapFrame"
            scrolling="no"
            style={{
              boxShadow: '0px 0px 40px 1px #311C31'
            }}
          />
          {/*
            <SwapWidget theme={theme} defaultOutputTokenAddress='0xe6AbA037067A84DC6a21e3eA56918A48e33cb2D7' />
            */}
        </div>
      </div>
      {/*
        <div className="flex h-fit w-full flex-col items-stretch justify-center overflow-hidden rounded-xl border border-[#5C5667] bg-[#343238]">
        <div className="h-fit w-full px-4 lg:px-20 py-8">
          <h5 className="montreal mb-4 text-sm text-[#F7E16B]">
            {t('pay')}
          </h5>
          <div className="flex h-fit w-full flex-col lg:flex-row items-center justify-between gap-6">
            <div className="h-fit w-full lg:w-1/2">
              <input
                type="number"
                placeholder="0.0"
                className="montrealMedium h-fit w-full border border-b-white border-l-transparent border-r-transparent border-t-transparent bg-transparent p-3 text-xl text-whiteText-500 active:border-b-white active:border-l-transparent active:border-r-transparent active:border-t-transparent"
              />
              <p className="montrealMedium my-3 text-sm text-white opacity-50">
                ≈ $23.00.00
              </p>
            </div>
            <div className="h-fit w-full lg:w-1/2">
              <input
                type="number"
                placeholder="0.0"
                className="montrealMedium h-fit w-full border border-b-white border-l-transparent border-r-transparent border-t-transparent bg-transparent p-3 text-xl text-whiteText-500 active:border-b-white active:border-l-transparent active:border-r-transparent active:border-t-transparent"
              />
              <p className="montrealMedium my-3 text-sm text-white opacity-50">
                ≈ $23.00.00
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-fit w-full flex-col lg:flex-row items-center justify-center gap-3 bg-[#24222A] px-4 lg:px-20 py-8">
          <button className="flex h-fit w-full lg:w-fit flex-row gap-2 items-center justify-center rounded-2xl px-12 py-3 bg-[#F7E16B]">
            <MdCompareArrows size={25} color="#24222A" />
            <p className="montrealMedium text-lg text-[#24222A] uppercase">Buy CMAX</p>
          </button>
          <button className="flex h-fit w-full lg:w-fit flex-row gap-2 items-center justify-center rounded-2xl px-8 py-3 bg-[#6C7074]">
            <MdCompareArrows size={25} color="#FFFFFF" />
            <p className="montrealMedium text-lg text-whiteText-500 uppercase">Buy USING CARD</p>
          </button>
          <button className="flex h-fit w-full lg:w-fit flex-row gap-2 items-center justify-center rounded-2xl px-8 py-3 bg-[#6C7074]">
            <MdCompareArrows size={25} color="#FFFFFF" />
            <p className="montrealMedium text-lg text-whiteText-500 uppercase">commit mint</p>
          </button>
        </div>
      </div>
        */}
    </section>
  );
};

export default BuyCMAX;
