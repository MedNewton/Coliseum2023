// Assets :
import shadesBg from "@assets/images/shadesBg1.png";
import { FaRegCircleCheck } from "react-icons/fa6";

const BackedTokensSection = () => {
  return (
    <section className="flex h-fit w-full flex-col items-center justify-start py-10">
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        Backed Tokens
      </h5>
      <p className="montreal mb-12 mt-6 w-7/12 text-center text-lg text-whiteText-500">
        Immerse yourself in a dynamic visual tour showcasing the RWFA DApp's
        transformative capabilities, from secure transactions to decentralized
        empowerment.
      </p>
      <div className="flex h-fit w-7/12 flex-row items-stretch justify-between gap-2 rounded-xl shadow-sm shadow-[#24222A]">
        <div
          className="flex h-fit w-1/2 flex-col flex-grow items-start justify-center gap-1 rounded-xl bg-cover bg-center bg-no-repeat px-3 py-12"
          style={{
            backgroundImage: `url('${shadesBg.src}')`,
          }}
        >
          <h5 className="montrealMedium mb-6 text-2xl text-whiteText-500">
            Build for decentralization
          </h5>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Freely transferable tokens
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Composable with DeFi protocols
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Mutlichain support
            </h5>
          </div>
        </div>
        <div
          className="flex h-fit w-1/2 flex-col items-start justify-center gap-1 rounded-xl bg-cover bg-center bg-no-repeat px-3 py-12 flex-grow"
          style={{
            backgroundImage: `url('${shadesBg.src}')`,
          }}
        >
          <h5 className="montrealMedium mb-6 text-2xl text-whiteText-500">
          Real value
          </h5>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
            Each token is backed by the underlying assets
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
            3rd-party licensed custodians hold assets
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
            Redeemable for the assets cash value
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedTokensSection;
