import Image from "next/image";

// Assets :
import eth from "@assets/images/eth.png";
import mantie from "@assets/images/mantie.png";
import polygon from "@assets/images/polygon.png";
import bnb from "@assets/images/bnb.png";
import wallet from "@assets/images/wallet1.png";
import poolTogether from "@assets/images/poolTogether.png";

const Holdings = () => {
  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-36 pb-16">
      <h5 className="montrealMedium mb-4 text-4xl text-[#F7E16B]">
        Holdings
      </h5>
      <div className=" flex h-fit w-full flex-col items-start justify-center gap-3 overflow-hidden rounded-xl border border-[#34313C] bg-[#24222A] p-6">
        <div className="flex h-fit w-full flex-row items-center justify-start gap-3">
          <div className="flex w-fit flex-row items-center justify-around gap-8 rounded-lg bg-[#343238] py-3 px-6 ">
            <Image src={eth} alt="eth" height={60} width={60}></Image>
            <div className="h-fit w-fit">
              <h5 className="montreal text-lg text-whiteText-500">Ethereum</h5>
              <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
                <h5 className="montrealBold text-xl text-whiteText-500">$83</h5>
                <h5 className="montreal text-base text-whiteText-500 opacity-50">
                  43%
                </h5>
              </div>
            </div>
          </div>
          <div className="flex w-fit flex-row items-center justify-around gap-3 rounded-lg bg-[#343238] py-3 px-6">
            <Image src={mantie} alt="eth" height={60} width={60}></Image>
            <div className="h-fit w-fit">
              <h5 className="montreal text-lg text-whiteText-500">Mantie</h5>
              <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
                <h5 className="montrealBold text-xl text-whiteText-500">$83</h5>
                <h5 className="montreal text-base text-whiteText-500 opacity-50">
                  43%
                </h5>
              </div>
            </div>
          </div>
          <div className="flex w-fit flex-row items-center justify-around gap-3 rounded-lg bg-[#343238] py-3 px-6">
            <Image src={polygon} alt="eth" height={60} width={60}></Image>
            <div className="h-fit w-fit">
              <h5 className="montreal text-lg text-whiteText-500">Polygon</h5>
              <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
                <h5 className="montrealBold text-xl text-whiteText-500">$83</h5>
                <h5 className="montreal text-base text-whiteText-500 opacity-50">
                  43%
                </h5>
              </div>
            </div>
          </div>
          <div className="flex w-fit flex-row items-center justify-around gap-3 rounded-lg bg-[#343238] py-3 px-6">
            <Image src={bnb} alt="eth" height={60} width={60}></Image>
            <div className="h-fit w-fit">
              <h5 className="montreal text-lg text-whiteText-500">BNB Coin</h5>
              <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
                <h5 className="montrealBold text-xl text-whiteText-500">$83</h5>
                <h5 className="montreal text-base text-whiteText-500 opacity-50">
                  43%
                </h5>
              </div>
            </div>
          </div>
        </div>
        <h5 className="montrealMedium mb-8 mt-4 text-xl capitalize text-[#F7E16B]">
        Unfold 11 Coin
        </h5>

        <div className="flex h-fit w-full flex-row items-center justify-start gap-3">
          <div className="flex w-fit flex-row items-center justify-around gap-8 rounded-lg bg-[#343238] py-3 px-6 ">
            <Image src={wallet} alt="eth" height={60} width={60}></Image>
            <div className="h-fit w-fit">
              <h5 className="montreal text-lg text-whiteText-500">Wallet</h5>
              <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
                <h5 className="montrealBold text-xl text-whiteText-500">$83</h5>
                
              </div>
            </div>
          </div>
          <div className="flex w-fit flex-row items-center justify-around gap-3 rounded-lg bg-[#343238] py-3 px-6">
            <Image src={poolTogether} alt="eth" height={60} width={60}></Image>
            <div className="h-fit w-fit">
              <h5 className="montreal text-lg text-whiteText-500">Pool Together</h5>
              <div className="flex h-fit w-fit flex-row items-center justify-start gap-2">
                <h5 className="montrealBold text-xl text-whiteText-500">$83</h5>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Holdings;
