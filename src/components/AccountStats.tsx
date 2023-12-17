const AccountStats = () => {
  return (
    <section className="mb-20 px-36">
      <div className="h-fit w-full rounded-xl border border-[#5C5667] bg-[#343238] p-6">
        <h5 className="montrealMedium mb-8 mt-4 text-3xl capitalize text-[#F7E16B]">
          Your Account Stats
        </h5>
        <div className="flex h-fit w-full flex-row items-center justify-between">
          <div className="h-fit w-fit">
            <h5 className="montreal text-xl text-whiteText-500">
              Total Spendings
            </h5>
            <h5 className="montrealMedium text-3xl text-whiteText-500">
              $500,000,000.000
            </h5>
          </div>
          <div className="h-fit w-fit">
            <h5 className="montreal text-xl text-whiteText-500">
              Total Benefits
            </h5>
            <h5 className="montrealMedium text-3xl text-whiteText-500">
              $500,000,000.000
            </h5>
          </div>
          <div className="h-fit w-fit">
            <h5 className="montreal text-xl text-whiteText-500">
              Total Assets Value
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
