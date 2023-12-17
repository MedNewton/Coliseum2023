import Image from "next/image";

// Assets :

import rewards from "@assets/images/rewards.png";
import security from "@assets/images/networkSecurity.png";
import appreciation from "@assets/images/appreciation.png";
import liquidity from "@assets/images/liquidity.png";

const ProfileTopSection = () => {
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
      
    </section>
  );
};

export default ProfileTopSection;
