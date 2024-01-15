// Components :
import dynamic from "next/dynamic";
import { darkTheme, Theme } from "@uniswap/widgets";
import { CopyToClipboard } from "react-copy-to-clipboard";
// Assets :
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";


const SwapWidget = dynamic(
  async () => {
    const res = await import("@uniswap/widgets");
    return res.SwapWidget;
  },
  { ssr: false },
);

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MdCompareArrows } from "react-icons/md";
import Link from "next/link";

const BuyCMAX = () => {
  const { t, i18n } = useTranslation();

  const [copied, setCopied] = useState<boolean>(false);

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
    <section className="flex h-fit w-full flex-col items-start justify-start px-4 pt-44 lg:px-0">
      <div className="flex h-fit w-full flex-col items-start justify-center px-2 py-8 lg:flex-row lg:px-20">
        <div className="flex h-fit w-full flex-col items-start justify-start lg:w-full">
          <h5 className="montrealMedium mb-6 text-4xl text-[#F7E16B]">
            {t("buy")} CMAX
          </h5>
          <h5 className="montrealMedium mb-8 text-2xl text-whiteText-500">
            {t("uniswapText")}
          </h5>
          <h5 className="montrealMedium mb-8 text-2xl text-whiteText-500">
            {t("uniswapText2")}
          </h5>
          <div className="mb-8 flex flex-row items-center justify-start gap-3 lg:gap-2">
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Smart Contract : 0xe6AbA...cb2D7
            </h5>
            <div className="relative z-50 flex h-fit w-fit cursor-pointer flex-row items-center justify-center rounded-full bg-[#F7E16B] p-2 ">
              <CopyToClipboard
                text={"0xe6AbA037067A84DC6a21e3eA56918A48e33cb2D7"}
                onCopy={() => setCopied(true)}
              >
                {
                  !copied ? (<IoCopyOutline color="#1E1C23" size={19} />) : (<FaCheck color="#097969" size={19} />)
                }
                
              </CopyToClipboard>
              
            </div>
          </div>
          <Link
            target="_blank"
            className="w-full lg:w-fit relative z-50 "
            href="https://app.uniswap.org/swap?chain=ethereum&outputCurrency=0xe6AbA037067A84DC6a21e3eA56918A48e33cb2D7"
          >
            <button className="montrealMedium flex w-full flex-row items-center justify-center rounded-lg bg-[#F7E16B] px-8 py-3 text-lg uppercase text-[#1F1D26] lg:w-fit lg:text-xl ">
              {t("buy")} CMAX
            </button>
          </Link>
          
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
