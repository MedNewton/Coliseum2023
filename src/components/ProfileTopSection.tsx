import Image from "next/image";
import Link from "next/link";

// Assets :

import { CiLocationOn } from "react-icons/ci";
import { RxNotionLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { RiTwitterXFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const ProfileTopSection = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-20 pt-44 pb-20">
      <div className="flex h-fit w-full flex-row items-stretch justify-between gap-16">
        <div className="flex w-2/5 flex-grow flex-col items-end justify-center">
          <div className="aspect-square h-4/5 rounded-full border-4 border-[#F7E16B] bg-slate-400 shadow-sm shadow-[#F7E16B]"></div>
          <div className="flex h-fit w-fit flex-row items-center justify-center gap-4 mt-6">
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
            {t('hi')},
          </h5>
          <h5 className="montrealBold text-4xl capitalize text-[#F7E16B]">
            Sebastian Mathew
          </h5>
          <div className="flex h-fit w-fit flex-row items-center justify-normal">
            <CiLocationOn size={20} color="#F7E16B" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              1234 NW Bobcat Lane, St. Robert, MO 65584-5678.
            </h5>
          </div>
          <h5 className="montrealMedium mt-4 text-3xl capitalize text-[#F7E16B]">
            {t('networth')}
          </h5>
          <h5 className="montrealMedium text-3xl text-whiteText-500">
            $500,000,000.000
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ProfileTopSection;
