import Image from "next/image";
import Link from "next/link";

// Components : 
import Marquee from "react-fast-marquee";

// Assets :
import icon1 from "@assets/images/market1.png";
import icon2 from "@assets/images/market2.png";
import icon3 from "@assets/images/market3.png";
import icon4 from "@assets/images/market4.png";
import icon5 from "@assets/images/market5.png";
import icon6 from "@assets/images/market6.png";
import { useTranslation } from "react-i18next";

const MarketsSection = () => {


  const { t, i18n } = useTranslation();

  return (
    <section className="mt-6 flex h-fit w-full flex-col items-center justify-center py-16 bg-[#151517]">
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        {t('marketshead')}
      </h5>
      <p className="montreal mb-12 mt-6 w-11/12 lg:w-7/12 text-center text-xl lg:text-lg text-whiteText-500">
        {t('marketspara')}
      </p>
      <Marquee loop={0} pauseOnHover={true}>
        <Link href={"https://www.mexc.com/"} target="_blank">
          <Image src={icon1} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.coinstore.com/"} target="_blank">
          <Image src={icon2} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.cobo.com/"} target="_blank">
          <Image src={icon3} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.xt.com/en"} target="_blank">
          <Image src={icon4} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://enordigital.com/markets"} target="_blank">
          <Image src={icon5} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.poolin.com/"} target="_blank">
          <Image src={icon6} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.mexc.com/"} target="_blank">
          <Image src={icon1} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.coinstore.com/"} target="_blank">
          <Image src={icon2} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.cobo.com/"} target="_blank">
          <Image src={icon3} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.xt.com/en"} target="_blank">
          <Image src={icon4} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://enordigital.com/markets"} target="_blank">
          <Image src={icon5} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.poolin.com/"} target="_blank">
          <Image src={icon6} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.mexc.com/"} target="_blank">
          <Image src={icon1} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.coinstore.com/"} target="_blank">
          <Image src={icon2} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.cobo.com/"} target="_blank">
          <Image src={icon3} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.xt.com/en"} target="_blank">
          <Image src={icon4} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://enordigital.com/markets"} target="_blank">
          <Image src={icon5} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.poolin.com/"} target="_blank">
          <Image src={icon6} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.mexc.com/"} target="_blank">
          <Image src={icon1} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.coinstore.com/"} target="_blank">
          <Image src={icon2} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.cobo.com/"} target="_blank">
          <Image src={icon3} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.xt.com/en"} target="_blank">
          <Image src={icon4} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://enordigital.com/markets"} target="_blank">
          <Image src={icon5} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.poolin.com/"} target="_blank">
          <Image src={icon6} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.mexc.com/"} target="_blank">
          <Image src={icon1} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.coinstore.com/"} target="_blank">
          <Image src={icon2} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.cobo.com/"} target="_blank">
          <Image src={icon3} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.xt.com/en"} target="_blank">
          <Image src={icon4} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://enordigital.com/markets"} target="_blank">
          <Image src={icon5} alt="markets" className=" scale-50"></Image>
        </Link>
        <Link href={"https://www.poolin.com/"} target="_blank">
          <Image src={icon6} alt="markets" className=" scale-50"></Image>
        </Link>
      </Marquee>
    </section>
  );
};

export default MarketsSection;
