
import Link from "next/link";

// Assets :
import communityBG from "@assets/images/communityBG.png";
import { RxNotionLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const CommunitySection = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section
      className="mt-6 flex h-fit w-full flex-col items-center justify-center bg-top bg-no-repeat py-16"
      style={{
        backgroundImage: `url('${communityBG.src}')`,
        backgroundSize: "100% 100%",
      }}
    >
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        {t('communityhead')}
      </h5>
      <p className="montreal mb-12 mt-6 w-11/12 lg:w-7/12 text-center text-xl lg:text-lg text-whiteText-500">
        {t('communityparagraph')}
      </p>
      <div className="my-6 flex h-fit w-full flex-row items-center justify-center gap-8">
        <Link href={"https://www.notion.so/"}>
          <RxNotionLogo color="#FFFFFF" size={35} />
        </Link>
        <Link href={"https://github.com/ColiseumProject/Coliseum2023"}>
          <RxGithubLogo color="#FFFFFF" size={35} />
        </Link>
        <Link href={"https://www.linkedin.com/company/coliseum-cmax/"}>
          <RxLinkedinLogo color="#FFFFFF" size={35} />
        </Link>
        <Link href={"https://twitter.com/CMAX_official"} target="_blank">
          <RiTwitterXFill color="#FFFFFF" size={35} />
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;
