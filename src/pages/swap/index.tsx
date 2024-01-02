import { type NextPage } from "next";
import Head from "next/head";

// Components :
import Navbar from "@/components/navbar";
import Chartbox from "@/components/ChartBox";
import Swap from "@/components/Swap";
import CommunitySection from "@/components/Community";
import Footer from "@/components/Footer";
// Assets
import logo from "@assets/images/lg.png";
import bigChart from "@assets/images/bigChart.png";

const SwapPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coliseum - Swap</title>
        <meta name="description" content="Coliseum project - Swawp" />
        <link rel="icon" href={logo.src} />
      </Head>
      <main className="m-0 h-fit min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-[#201D26] to-[#1D1B20] p-0">
        <Navbar />
        <section className="flex h-fit w-full flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 px-4 lg:px-20 py-36">
          <div className="w-full lg:w-9/12 flex-grow">
            <Chartbox />
          </div>
          <div className="h-fit w-full lg:w-3/12">
            <Swap />
          </div>
        </section>
        <CommunitySection />
        <Footer />
      </main>
    </>
  );
};

export default SwapPage;
