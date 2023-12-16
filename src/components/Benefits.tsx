import Image from "next/image";

// Assets :

import rewards from "@assets/images/rewards.png";
import security from "@assets/images/networkSecurity.png";
import appreciation from "@assets/images/appreciation.png";
import liquidity from "@assets/images/liquidity.png";

const Benefits = () => {
  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-20 pt-44">
      <h5 className="montrealBold mb-4 text-4xl text-[#F7E16B]">
        Staking Benefits
      </h5>
      <p className="montrealMedium mb-8 w-10/12 text-xl leading-normal text-white">
        Staking in blockchain involves participants, called "stakers" or
        "validators," locking up their cryptocurrency holdings to support the
        network.
      </p>
      <div className="flex h-fit w-full flex-row items-stretch justify-center rounded-xl border border-[#5C5667] bg-[#343238] p-6">
        <div className="flex flex-grow w-1/4 flex-col items-center justify-between gap-3 ">
          <Image src={rewards} alt="earning rewards" width={80} height={80}></Image>
          <h5 className="montrealBold text-whiteText-500 text-center text-xl">Earning Rewards</h5>
        </div>
        <div className="flex flex-grow w-1/4 flex-col items-center justify-between gap-3">
          <Image src={security} alt="earning rewards" width={80} height={80}></Image>
          <h5 className="montrealBold text-whiteText-500 text-center text-xl">Network Security</h5>
        </div>
        <div className="flex flex-grow w-1/4 flex-col items-center justify-between gap-3">
          <Image src={appreciation} alt="earning rewards" width={80} height={80}></Image>
          <h5 className="montrealBold text-whiteText-500 text-center text-xl">Token Appreciation</h5>
        </div>
        <div className="flex flex-grow w-1/4 flex-col items-center justify-between gap-3">
          <Image src={liquidity} alt="earning rewards" width={80} height={80}></Image>
          <h5 className="montrealBold text-whiteText-500 text-center text-xl">Liquidity</h5>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
