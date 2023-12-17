import { useTranslation } from "react-i18next";

const AboutUs = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="flex h-fit w-full flex-col items-start justify-start pt-44 px-20">
      <h5 className="montrealBold mb-4 text-4xl text-[#F7E16B]">
        {t('aboutus')}
      </h5>
      <p className="montrealMedium mb-8 text-xl text-white w-10/12 leading-normal">
        {t('aboutparagraph')}
      </p>
    </section>
  );
};

export default AboutUs;
