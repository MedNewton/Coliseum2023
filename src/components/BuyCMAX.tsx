// Components :
import { Theme, darkTheme, SwapWidget } from "@uniswap/widgets";

// Assets :

import { useTranslation } from "react-i18next";
import { MdCompareArrows } from "react-icons/md";

const BuyCMAX = () => {
  const { t, i18n } = useTranslation();

  const theme: Theme = {
    primary: '#FFF',
    secondary: '#A9A9A9',
    interactive: '#343238',
    container: '#4E4E5A',
    module: '#222633',
    accent: '#F7E16B',
    dialog: '#000',
    
  }

  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-4 py-16 lg:px-20">
      <div className="flex h-fit w-full flex-col items-start justify-center px-4 py-8 lg:flex-row lg:px-20">
        <div className="flex h-fit w-full flex-col items-start justify-start lg:w-1/2">
          <h5 className="montrealMedium mb-6 text-4xl text-[#F7E16B]">
            {t("buy")} CMAX
          </h5>
          <h5 className="montrealMedium mb-4 text-2xl text-whiteText-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h5>
        </div>
        <div className="flex h-fit w-full flex-row items-center justify-center pt-10 lg:pt-0 lg:w-1/2">
          <SwapWidget theme={theme} />
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
