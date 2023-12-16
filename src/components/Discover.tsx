import Image from "next/image";
import Link from "next/link";

// Assets :
import icon1 from "@assets/images/inclusion.png";
import icon2 from "@assets/images/effortless.png";
import icon3 from "@assets/images/security.png";
import icon4 from "@assets/images/fees.png";
import icon5 from "@assets/images/contract.png";
import icon6 from "@assets/images/control.png";

const DiscoverSection = () => {
  return (
    <section className="my-6 flex h-fit w-full flex-col items-center justify-center bg-[#24222A] py-16">
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        Discover Our Benefits
      </h5>
      <p className="montreal mb-12 mt-6 w-7/12 text-center text-lg text-whiteText-500">
        Elevate your financial experience with RWFA DApp – where decentralized
        power meets security, offering cross-border transactions and smart
        contract capabilities for a future-forward journey.
      </p>
      <div className="h-fit w-6/12 flex-col items-center justify-start gap-3">
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
                Seamless Financial Inclusion
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              Join a platform designed to bridge the gap between traditional
              financial systems and the digital world, ensuring access to
              financial services for all.
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
                Effortless Cross-Border Transactions
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              Send and receive funds globally without the complexities of
              traditional banking systems, making international transactions
              faster and more cost-effective
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
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                Enhanced
                <br />
                Security
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              Experience enhanced security through blockchain technology,
              providing tamper-resistant records and advanced encryption to
              protect your data and transactions
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
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                Reduced
                <br />
                Fees
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              Benefit from lower transaction fees compared to traditional
              financial systems, maximizing the value of your transactions
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
                Smart Contract Capabilities
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              Leverage smart contracts to automate agreements and transactions,
              ensuring transparency and eliminating the need for intermediaries
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
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                Decentralized
                <br />
                Control
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              Enjoy the power of decentralization, where users have more control
              over their assets and transactions, reducing dependence on
              intermediaries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
