import Image from "next/image";
import Link from "next/link";

// Assets :
import communityBG from "@assets/images/communityBG.png";
import { RxNotionLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { RiTwitterXFill } from "react-icons/ri";

const CommunitySection = () => {
  return (
    <section
      className="mt-6 flex h-fit w-full flex-col items-center justify-center bg-top bg-no-repeat py-16"
      style={{
        backgroundImage: `url('${communityBG.src}')`,
        backgroundSize: "100% 100%",
      }}
    >
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        Join our community
      </h5>
      <p className="montreal mb-12 mt-6 w-7/12 text-center text-lg text-whiteText-500">
        Dive into a thriving hub of shared knowledge and innovation, uniting
        with us to shape the future of finance through RWFA DApp. Your
        participation drives our collective journey toward decentralized
        excellence.
      </p>
      <div className="my-6 flex h-fit w-full flex-row items-center justify-center gap-8">
        <Link href={""}>
          <RxNotionLogo color="#FFFFFF" size={35} />
        </Link>
        <Link href={""}>
          <RxGithubLogo color="#FFFFFF" size={35} />
        </Link>
        <Link href={""}>
          <RxLinkedinLogo color="#FFFFFF" size={35} />
        </Link>
        <Link href={""}>
          <RiTwitterXFill color="#FFFFFF" size={35} />
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;
