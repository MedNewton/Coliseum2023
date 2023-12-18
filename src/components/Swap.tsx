/* eslint-disable @typescript-eslint/no-unused-vars */
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

// Assets :
import eth from "@assets/images/eth.png";
import polygon from "@assets/images/polygon.png";
import mantie from "@assets/images/mantie.png";
import quant from "@assets/images/quant.png";
import tita from "@assets/images/titaSmall.png";
import worldCoin from "@assets/images/worldCoin.png";
import pepe from "@assets/images/pepe.png";
import aptos from "@assets/images/aptos.png";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";

interface Coin {
  name: string;
  logo: StaticImageData; // Assuming the logo is a string, you can replace it with the correct type if needed
}

const Swap = () => {
  const [action1, setAction1] = useState<string>("swap");
  const [action2, setAction2] = useState<string>("mint");
  const [chosenCoin1, setChosenCoin1] = useState<Coin>({
    name: "Aptos",
    logo: aptos,
  });
  const [chosenCoin2, setChosenCoin2] = useState<Coin>({
    name: "Tita",
    logo: tita,
  });

  function toggleAction1() {
    action1 == "mintBurn" ? setAction1("swap") : setAction1("mintBurn");
  }

  function toggleAction2() {
    action2 == "mint" ? setAction2("burn") : setAction2("mint");
  }

  const { t, i18n } = useTranslation();

  const Coins = [
    {
      name: "Ethereum",
      logo: eth,
    },
    {
      name: "Polygon",
      logo: polygon,
    },
    {
      name: "Mantie",
      logo: mantie,
    },
    {
      name: "Quant",
      logo: quant,
    },
    {
      name: "Pepe",
      logo: pepe,
    },
    {
      name: "Tita",
      logo: tita,
    },
    {
      name: "World",
      logo: worldCoin,
    },
    {
      name: "Aptos",
      logo: aptos,
    },
  ];

  return (
    <div className="flex h-full w-full flex-grow flex-col items-center justify-start overflow-hidden rounded-2xl border border-[#24222A] bg-[#24222A] p-4">
      <div className="flex h-fit w-full flex-row items-center justify-around rounded-2xl border border-[#5C5667] bg-[#343238] p-2">
        <div
          className="flex h-fit w-1/2 relative z-50 cursor-pointer flex-row items-center justify-center"
          onClick={() => {
            setAction1("swap");
          }}
        >
          <button
            className={`montrealMedium flex h-fit w-full flex-row items-center justify-center py-2 ${
              action1 == "swap"
                ? " rounded-xl bg-[#F7E16B] text-black "
                : " text-white"
            }`}
            onClick={() => {
              setAction1("swap");
            }}
          >
            Swap
          </button>
        </div>
        <div
          className="flex h-fit w-1/2 relative z-50 cursor-pointer flex-row items-center justify-center"
          onClick={() => {
            setAction1("mintBurn");
          }}
        >
          <button
            className={`montrealMedium flex h-fit w-full flex-row items-center justify-center py-2 ${
              action1 == "mintBurn"
                ? " rounded-xl bg-[#F7E16B] text-black"
                : " text-white"
            }`}
            onClick={() => {
              setAction1("mintBurn");
            }}
          >
            Mint / Burn
          </button>
        </div>
      </div>
      {action1 == "swap" ? (
        <div className="h-fit w-full py-6 lg:px-4">
          <div className="h-fit w-full rounded-xl border border-[#5C5667] bg-[#343238] p-4">
            <div className="flex h-fit w-full flex-row items-center justify-between">
              <h5 className="montreal text-sm text-white">{t("pay")}</h5>
              <h5 className="montreal text-sm text-white">
                {t("balance")} : $3,234.00
              </h5>
            </div>
            <div className="relative z-50 my-6 flex h-fit w-full flex-row items-center justify-between">
              <input
                type="number"
                placeholder="0,00"
                className="montrealMedium w-1/2 border-none bg-transparent p-2 text-xl text-white active:border-none "
              />
              <button className="flex h-fit w-fit cursor-pointer flex-row items-center justify-between gap-3 rounded-full bg-[#3F4145] px-3 py-2">
                <div className="h-fit w-fit rounded-full">
                  <Image
                    src={chosenCoin1.logo}
                    alt={chosenCoin1.name}
                    height={30}
                    width={30}
                  ></Image>
                </div>
                <div className="flex h-fit w-fit flex-row items-center justify-end gap-1">
                  <h5 className="montrealBold text-base text-white">
                    {chosenCoin1.name}
                  </h5>
                </div>
              </button>
            </div>
            <h5 className="montreal text-sm text-white">= $23.00.00</h5>
          </div>
          <div className="my-4 flex h-fit w-full flex-row items-center justify-between px-1">
            <button className="montreal h-fit w-fit rounded-xl bg-[#3F4145] px-3 py-1 text-sm text-[#FFE500]">
              MAX
            </button>
            <button className="h-fit w-fit rounded-xl bg-[#3F4145] px-3 py-1">
              <MdOutlineCompareArrows size={22} color="#FFE500" />
            </button>
          </div>
          <div className="h-fit w-full rounded-xl border border-[#5C5667] bg-[#343238] p-4">
            <div className="flex h-fit w-full flex-row items-center justify-between">
              <h5 className="montreal text-sm text-white">{t("receive")}</h5>
              <h5 className="montreal text-sm text-white">
                {t("balance")} : $3,234.00
              </h5>
            </div>
            <div className="relative z-50 my-6 flex h-fit w-full flex-row items-center justify-between">
              <input
                type="number"
                placeholder="0,00"
                className="montrealMedium w-1/2 border-none bg-transparent p-2 text-xl text-white active:border-none "
              />
              <button className="flex h-fit w-fit cursor-pointer flex-row items-center justify-between gap-3 rounded-full bg-[#3F4145] px-3 py-2">
                <div className="h-fit w-fit rounded-full">
                  <Image
                    src={chosenCoin1.logo}
                    alt={chosenCoin1.name}
                    height={30}
                    width={30}
                  ></Image>
                </div>
                <div className="flex h-fit w-fit flex-row items-center justify-end gap-1">
                  <h5 className="montrealBold text-base text-white">
                    {chosenCoin1.name}
                  </h5>
                </div>
              </button>
            </div>
            <h5 className="montreal text-sm text-white">= $23.00.00</h5>
          </div>

          <div className="mt-10 flex h-fit w-full flex-row items-center justify-center">
            <button className="flex h-fit w-full flex-row items-center justify-center gap-2 rounded-xl bg-[#F7E16B] py-2">
              <MdOutlineCompareArrows size={24} color="#1F1330" />
              <span className=" montrealMedium text-xl text-[#1F1330]">
                SWAP NOW
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="h-fit w-full py-6 lg:px-4">
          <div className="h-fit w-full rounded-xl border border-[#5C5667] bg-[#343238] px-4 pb-4 pt-1">
            <div className="mb-4 flex h-fit w-full flex-row items-center justify-around gap-4 px-6">
              <button
                onClick={() => {
                  toggleAction2();
                }}
                className={`montrealMedium flex w-1/2 flex-row items-center justify-center py-3 text-base ${
                  action2 == "mint"
                    ? "border-b border-b-[#FFE500] text-[#FFE500]"
                    : "border-b border-b-[#757575] text-[#757575]"
                }`}
              >
                Mint
              </button>
              <button
                onClick={() => {
                  toggleAction2();
                }}
                className={`montrealMedium flex w-1/2 flex-row items-center justify-center py-3 text-base ${
                  action2 == "burn"
                    ? "border-b border-b-[#FFE500] text-[#FFE500]"
                    : "border-b border-b-[#757575] text-[#757575]"
                }`}
              >
                Burn
              </button>
            </div>
            <div className="flex h-fit w-full flex-row items-center justify-between">
              <h5 className="montreal text-sm text-white">{t("pay")}</h5>
              <h5 className="montreal text-sm text-white">
                {t("balance")} : $3,234.00
              </h5>
            </div>
            <div className="relative z-50 my-6 flex h-fit w-full flex-row items-center justify-between">
              <input
                type="number"
                placeholder="0,00"
                className="montrealMedium w-1/2 border-none bg-transparent p-2 text-xl text-white active:border-none "
              />
              <button className="flex h-fit w-fit cursor-pointer flex-row items-center justify-between gap-3 rounded-full bg-[#3F4145] px-3 py-2">
                <div className="h-fit w-fit rounded-full">
                  <Image
                    src={chosenCoin1.logo}
                    alt={chosenCoin1.name}
                    height={30}
                    width={30}
                  ></Image>
                </div>
                <div className="flex h-fit w-fit flex-row items-center justify-end gap-1">
                  <h5 className="montrealBold text-base text-white">
                    {chosenCoin1.name}
                  </h5>
                </div>
              </button>
            </div>
            <h5 className="montreal text-sm text-white">= $23.00.00</h5>
          </div>
          <div className="my-4 flex h-fit w-full flex-row items-center justify-between px-1">
            <button className="montreal h-fit w-fit rounded-xl bg-[#3F4145] px-3 py-1 text-sm text-[#FFE500]">
              MAX
            </button>
            <button className="h-fit w-fit rounded-xl bg-[#3F4145] px-3 py-1 opacity-0">
              <MdOutlineCompareArrows size={22} color="#FFE500" />
            </button>
          </div>
          <div className="h-fit w-full rounded-xl border border-[#5C5667] bg-[#343238] p-4">
            <div className="mb-4 flex h-fit w-full flex-row items-center justify-between">
              <h5 className="montreal text-sm text-white opacity-50">
                Total cost
              </h5>
              <h5 className="montreal text-sm text-white">= $13.2</h5>
            </div>
            <div className="mb-4 flex h-fit w-full flex-row items-center justify-between">
              <h5 className="montreal text-sm text-white opacity-50">
                Expected Tokens Minted
              </h5>
              <h5 className="montreal text-sm text-white">= $13.2</h5>
            </div>
            <div className="mb-2 flex h-fit w-full flex-row items-center justify-between">
              <h5 className="montreal text-sm text-white opacity-50">
                Expected Equivalent Expousure
              </h5>
              <h5 className="montreal text-sm text-white">= $13.2</h5>
            </div>
          </div>

          <div className="mt-10 flex h-fit w-full flex-row items-center justify-center">
            <button className="flex h-fit w-full flex-row items-center justify-center gap-2 rounded-xl bg-[#F7E16B] py-2">
              <MdOutlineCompareArrows size={24} color="#1F1330" />
              <span className=" montrealMedium text-xl text-[#1F1330]">
                {action2 == "mint" ? "COMMIT MINT" : "COMMIT BURN"}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Swap;
