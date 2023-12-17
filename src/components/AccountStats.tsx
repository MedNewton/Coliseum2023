import { useTranslation } from "react-i18next";

const AccountStats = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="mb-20 px-36">
      <div className="h-fit w-full rounded-xl border border-[#5C5667] bg-[#343238] p-6">
        <h5 className="montrealMedium mb-8 mt-4 text-3xl capitalize text-[#F7E16B]">
          {t('accountStats')}
        </h5>
        <div className="flex h-fit w-full flex-row items-center justify-between">
          <div className="h-fit w-fit">
            <h5 className="montreal text-xl capitalize text-whiteText-500">
              {t('spendings')}
            </h5>
            <h5 className="montrealMedium text-3xl text-whiteText-500">
              $500,000,000.000
            </h5>
          </div>
          <div className="h-fit w-fit">
            <h5 className="montreal text-xl text-whiteText-500">
              {t('totalbenefit')}
            </h5>
            <h5 className="montrealMedium text-3xl text-whiteText-500">
              $500,000,000.000
            </h5>
          </div>
          <div className="h-fit w-fit">
            <h5 className="montreal text-xl text-whiteText-500">
              {t('totalassetvalue')}
            </h5>
            <h5 className="montrealMedium text-3xl text-whiteText-500">
              $500,000,000.000
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountStats;
