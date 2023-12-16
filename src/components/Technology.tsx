import Image from "next/image";
import Link from "next/link";

// Assets :
import icon1 from "@assets/images/chainlink.png";
import icon2 from "@assets/images/layerZero.png";

const TechnologySection = () => {
  return (
    <section className="my-6 flex h-fit w-full flex-col items-center justify-center py-16">
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        Technology we use
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
                We use Chainlink Function
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
              sem in magna tristique mollis quis in lacus. Cras sagittis magna
              enim, a accumsan tellus accumsan non
            </p>
          </div>
          <div className="w-1/2 flex-grow rounded-xl border border-[#5C5667] bg-[#343238] p-6">
            <div className="mb-8 flex h-fit w-full flex-row items-center justify-between gap-4">
              <Image
                src={icon2}
                alt="financial inclusion"
                width={60}
                height={60}
              ></Image>
              <h5 className="montrealMedium text-left text-3xl text-[#F7E16B]">
                Zero Layer technology implementation
              </h5>
            </div>
            <p className="montreal w-11/12 text-left text-lg leading-normal text-whiteText-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
              sem in magna tristique mollis quis in lacus. Cras sagittis magna
              enim, a accumsan tellus accumsan non.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
