import { useTranslation } from "react-i18next";
import { FaRegCircleCheck } from "react-icons/fa6";

const Roadmap = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex h-fit w-full flex-col items-start justify-start px-4 py-16 lg:px-20">
      <h5 className="montrealBold mb-4 text-4xl text-[#F7E16B]">
        {t("roadmap")}
      </h5>
      <p className="montrealMedium mb-8 w-full text-xl leading-normal text-white lg:w-10/12">
        {t("roadmapparagraph")}
      </p>
      <div className="mx-auto mb-6 flex h-fit w-full flex-col items-start justify-between gap-10 rounded-xl border border-[#5C5667] bg-[#343238] p-6 lg:w-9/12 lg:flex-row">
        <div className="flex h-fit w-full flex-row items-end justify-start gap-2 lg:w-1/5 lg:flex-col lg:items-center">
          <h5 className="montrealBold text-6xl text-whiteText-500 lg:mb-2 lg:text-8xl">
            Q1
          </h5>
          <p className=" montrealMedium text-xl text-whiteText-500">
            Jan To Mar
          </p>
        </div>
        <div className="h-fit w-full lg:w-4/5">
          <h5 className="montrealMedium text-3xl text-whiteText-500">
            {t("roadmaptitle1")}
          </h5>
          <p className="montreal my-4 w-full text-base leading-normal text-white lg:w-10/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget neque lectus. Donec a lobortis est, a molestie augue.
            Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus.
            Donec molestie mauris vel aliquet fermentum.
          </p>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Integer eget neque lectus
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Donec a lobortis est
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Pellentesque eget est lobortis
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              molestie mauris vel aliquet fermentum
            </h5>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-6 flex h-fit w-full flex-col items-start justify-between gap-10 rounded-xl border border-[#5C5667] bg-[#343238] p-6 lg:w-9/12 lg:flex-row">
        <div className="flex h-fit w-full flex-row items-end justify-start gap-2 lg:w-1/5 lg:flex-col lg:items-center">
          <h5 className="montrealBold text-6xl text-whiteText-500 lg:mb-2 lg:text-8xl">
            Q2
          </h5>
          <p className=" montrealMedium text-xl text-whiteText-500">
            Apr To Jun
          </p>
        </div>
        <div className="h-fit w-full lg:w-4/5">
          <h5 className="montrealMedium text-3xl text-whiteText-500">
            {t("roadmaptitle2")}
          </h5>
          <p className="montreal my-4 w-full text-base leading-normal text-white lg:w-10/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget neque lectus. Donec a lobortis est, a molestie augue.
            Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus.
            Donec molestie mauris vel aliquet fermentum.
          </p>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Integer eget neque lectus
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Donec a lobortis est
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Pellentesque eget est lobortis
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              molestie mauris vel aliquet fermentum
            </h5>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-6 flex h-fit w-full flex-col items-start justify-between gap-10 rounded-xl border border-[#5C5667] bg-[#343238] p-6 lg:w-9/12 lg:flex-row">
        <div className="flex h-fit w-full flex-row items-end justify-start gap-2 lg:w-1/5 lg:flex-col lg:items-center">
          <h5 className="montrealBold text-6xl text-whiteText-500 lg:mb-2 lg:text-8xl">
            Q3
          </h5>
          <p className=" montrealMedium text-xl text-whiteText-500">
            Jun To Sep
          </p>
        </div>
        <div className="h-fit w-full lg:w-4/5">
          <h5 className="montrealMedium text-3xl text-whiteText-500">
            {t("roadmaptitle3")}
          </h5>
          <p className="montreal my-4 w-full text-base leading-normal text-white lg:w-10/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget neque lectus. Donec a lobortis est, a molestie augue.
            Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus.
            Donec molestie mauris vel aliquet fermentum.
          </p>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Integer eget neque lectus
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Donec a lobortis est
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Pellentesque eget est lobortis
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              molestie mauris vel aliquet fermentum
            </h5>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-6 flex h-fit w-full flex-col items-start justify-between gap-10 rounded-xl border border-[#5C5667] bg-[#343238] p-6 lg:w-9/12 lg:flex-row">
        <div className="flex h-fit w-full flex-row items-end justify-start gap-2 lg:w-1/5 lg:flex-col lg:items-center">
          <h5 className="montrealBold text-6xl text-whiteText-500 lg:mb-2 lg:text-8xl">
            Q4
          </h5>
          <p className=" montrealMedium text-xl text-whiteText-500">
            Oct To Dec
          </p>
        </div>
        <div className="h-fit w-full lg:w-4/5">
          <h5 className="montrealMedium text-3xl text-whiteText-500">
            {t("roadmaptitle4")}
          </h5>
          <p className="montreal my-4 w-full text-base leading-normal text-white lg:w-10/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget neque lectus. Donec a lobortis est, a molestie augue.
            Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus.
            Donec molestie mauris vel aliquet fermentum.
          </p>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Integer eget neque lectus
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Donec a lobortis est
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              Pellentesque eget est lobortis
            </h5>
          </div>
          <div className="mb-2 flex h-fit w-fit flex-row items-center justify-start gap-2">
            <FaRegCircleCheck size={22} color="#FFE500" />
            <h5 className="montrealMedium text-xl text-whiteText-500">
              molestie mauris vel aliquet fermentum
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
