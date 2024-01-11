import Image from "next/image";
import Link from "next/link";
import { useBalance } from "@thirdweb-dev/react";
// Assets :

import { CiLocationOn } from "react-icons/ci";
import { RxNotionLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const ProfileTopSection = () => {
  const { t, i18n } = useTranslation();
  const tokenAddress = "0xe6AbA037067A84DC6a21e3eA56918A48e33cb2D7";
  const { data, isLoading } = useBalance(tokenAddress);

  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-4 pb-20 pt-44 lg:px-20">
      <div className="hidden h-fit w-full flex-row items-stretch justify-between gap-16 lg:flex">
        <div className="flex w-2/5 flex-grow flex-col items-end justify-center">
          <div className="aspect-square h-4/5 rounded-full border-4 border-[#F7E16B] bg-slate-400 shadow-sm shadow-[#F7E16B]"></div>
          <div className="mt-6 flex h-fit w-fit flex-row items-center justify-center gap-4">
            <Link href={""}>
              <RxNotionLogo color="#FFFFFF" size={25} />
            </Link>
            <Link href={""}>
              <RxGithubLogo color="#FFFFFF" size={25} />
            </Link>
            <Link href={""}>
              <RxLinkedinLogo color="#FFFFFF" size={25} />
            </Link>
            <Link href={""}>
              <RiTwitterXFill color="#FFFFFF" size={25} />
            </Link>
          </div>
        </div>
        <div className="flex h-fit w-4/5 flex-col items-start justify-start gap-2">
          <h5 className="montrealMedium text-2xl text-whiteText-500">
            {t("hi")},
          </h5>
          <h5 className="montrealBold text-4xl capitalize text-[#F7E16B]">
          Coliseum User #1
          </h5>
          <div className="flex h-fit w-fit flex-row items-center justify-normal">
            <CiLocationOn size={20} color="#F7E16B" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
            xxxx - xxxxx - xxxxx - xxxxx - xxxx
            </h5>
          </div>
          <h5 className="montrealMedium mt-4 text-3xl capitalize text-[#F7E16B]">
            {t("networth")}
          </h5>
          <h5 className="montrealMedium text-3xl text-whiteText-500">
          {data?.displayValue} CMAX
          </h5>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start lg:hidden">
        <div className="aspect-square w-3/5 md:w-2/5 relative z-50 rounded-full border-4 border-[#F7E16B] bg-slate-400 shadow-sm shadow-[#F7E16B]"></div>
        <div className="flex h-fit w-full -mt-8 relative z-10 flex-col items-center justify-start gap-6 py-14 px-2 bg-[#343238] border border-[#5C5667] rounded-2xl ">
          <h5 className="montrealBold text-4xl capitalize text-[#F7E16B]">
            Coliseum User #1
          </h5>
          <div className="flex h-fit w-fit flex-row items-center justify-center">
            <h5 className="montrealMedium text-center w-10/12 text-xl text-whiteText-500">
              xxxx - xxxxx - xxxxx - xxxxx - xxxx
            </h5>
          </div>
          <h5 className="montrealMedium w-fit h-fit px-6 py-1 rounded-full mt-4 text-3xl capitalize text-black bg-[#F7E16B] ">
            {t("networth")}
          </h5>
          <h5 className="montrealMedium text-3xl text-whiteText-500">
          $000,000,000.000
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ProfileTopSection;
