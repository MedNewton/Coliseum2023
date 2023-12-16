import Image from "next/image";
import Link from "next/link";

// Assets :
import { GoArrowUpRight } from "react-icons/go";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

import tita from "@assets/images/titaSmall.png";
import pepe from "@assets/images/pepe.png"
import aptos from "@assets/images/aptos.png"
import shiba from '@assets/images/shiba.png'
import quant from '@assets/images/quant.png'
import world from '@assets/images/worldCoin.png'

const TrendingProducts = () => {
  return (
    <section className="flex h-fit w-full flex-col items-center justify-start py-6">
      <div className="mb-4 flex w-8/12 flex-row items-center justify-between gap-3 px-2">
        <h5 className="montrealMedium text-3xl text-[#F7E16B] ">
          Trending Products
        </h5>
        <div className="flex h-fit w-fit flex-row items-center justify-end gap-2">
          <h5 className="montrealMedium text-lg text-[#F7E16B] ">More</h5>
          <GoArrowUpRight size={25} color="#F7E16B" />
        </div>
      </div>
      <div className="flex h-fit w-8/12 flex-row items-center justify-between gap-3 mb-3">
        <div className="flex h-fit w-1/2 flex-row items-center justify-between rounded-xl border border-[#34313C] bg-[#24222A] px-3 py-2">
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-3">
            <h5 className="montrealMedium text-2xl text-white">1</h5>
            <Image src={tita} alt="tita" width={35} height={35}></Image>
            <h5 className="montrealMedium text-xl text-white">Tita</h5>
          </div>
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-1">
            <GoTriangleDown size={18} color="#0CE770ED" />
            <h5 className="montrealMedium text-xl text-[#0CE770ED]">1.2%</h5>
          </div>
        </div>
        <div className="flex h-fit w-1/2 flex-row items-center justify-between rounded-xl border border-[#34313C] bg-[#24222A] px-3 py-2">
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-3">
            <h5 className="montrealMedium text-2xl text-white">2</h5>
            <Image src={pepe} alt="tita" width={35} height={35}></Image>
            <h5 className="montrealMedium text-xl text-white">Pepe</h5>
          </div>
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-1">
            <GoTriangleDown size={18} color="#0CE770ED" />
            <h5 className="montrealMedium text-xl text-[#0CE770ED]">1.2%</h5>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-8/12 flex-row items-center justify-between gap-3 mb-3">
        <div className="flex h-fit w-1/2 flex-row items-center justify-between rounded-xl border border-[#34313C] bg-[#24222A] px-3 py-2">
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-3">
            <h5 className="montrealMedium text-2xl text-white">3</h5>
            <Image src={aptos} alt="tita" width={35} height={35}></Image>
            <h5 className="montrealMedium text-xl text-white">Aptos</h5>
          </div>
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-1">
            <GoTriangleDown size={18} color="#0CE770ED" />
            <h5 className="montrealMedium text-xl text-[#0CE770ED]">1.2%</h5>
          </div>
        </div>
        <div className="flex h-fit w-1/2 flex-row items-center justify-between rounded-xl border border-[#34313C] bg-[#24222A] px-3 py-2">
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-3">
            <h5 className="montrealMedium text-2xl text-white">4</h5>
            <Image src={shiba} alt="tita" width={35} height={35}></Image>
            <h5 className="montrealMedium text-xl text-white">Shiba Inu</h5>
          </div>
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-1">
            <GoTriangleDown size={18} color="#0CE770ED" />
            <h5 className="montrealMedium text-xl text-[#0CE770ED]">1.2%</h5>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-8/12 flex-row items-center justify-between gap-3 mb-3">
        <div className="flex h-fit w-1/2 flex-row items-center justify-between rounded-xl border border-[#34313C] bg-[#24222A] px-3 py-2">
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-3">
            <h5 className="montrealMedium text-2xl text-white">5</h5>
            <Image src={quant} alt="tita" width={35} height={35}></Image>
            <h5 className="montrealMedium text-xl text-white">Quant</h5>
          </div>
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-1">
            <GoTriangleDown size={18} color="#0CE770ED" />
            <h5 className="montrealMedium text-xl text-[#0CE770ED]">1.2%</h5>
          </div>
        </div>
        <div className="flex h-fit w-1/2 flex-row items-center justify-between rounded-xl border border-[#34313C] bg-[#24222A] px-3 py-2">
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-3">
            <h5 className="montrealMedium text-2xl text-white">6</h5>
            <Image src={world} alt="tita" width={35} height={35}></Image>
            <h5 className="montrealMedium text-xl text-white">Worldcoin</h5>
          </div>
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-1">
            <GoTriangleDown size={18} color="#0CE770ED" />
            <h5 className="montrealMedium text-xl text-[#0CE770ED]">1.2%</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
