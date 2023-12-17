// Assets :
import shadesBg from "@assets/images/shadesBg1.png";
import { useTranslation } from "react-i18next";
import { FaRegCircleCheck } from "react-icons/fa6";

const BackedTokensSection = () => {



  const { t, i18n } = useTranslation();
  
  return (
    <section className="flex h-fit w-full flex-col items-center justify-start py-10">
      <h5 className="montrealMedium text-center text-3xl text-[#F7E16B]">
        {t('backedhead')}
      </h5>
      <p className="montreal mb-12 mt-6 w-7/12 text-center text-lg text-whiteText-500">
        {t('backedpara')}
      </p>
      <div className="flex h-fit w-7/12 flex-row items-stretch justify-between gap-2 rounded-xl shadow-sm shadow-[#24222A]">
        <div
          className="flex h-fit w-1/2 flex-col flex-grow items-start justify-center gap-1 rounded-xl bg-cover bg-center bg-no-repeat px-3 py-12"
          style={{
            backgroundImage: `url('${shadesBg.src}')`,
          }}
        >
          <h5 className="montrealMedium mb-6 text-2xl text-whiteText-500">
            {t('backed1head')}
          </h5>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              {t('backed1line1')}
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              {t('backed1line2')}
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              {t('backed1line3')}
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
          {t('backed2head')}
          </h5>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
            {t('backed2Line1')}
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
            {t('backed2Line2')}
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
            {t('backed2Line3')}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedTokensSection;
