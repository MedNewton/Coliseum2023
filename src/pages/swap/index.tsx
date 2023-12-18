import { type NextPage } from 'next'
import Head from 'next/head'

// Components : 
import Navbar from '@/components/navbar'
import Chartbox from '@/components/ChartBox'
import Swap from '@/components/Swap'
import CommunitySection from '@/components/Community'
import Footer from '@/components/Footer'
// Assets 
import logo from '@assets/images/logo.png'
import bigChart from '@assets/images/bigChart.png'

const SwapPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Coliseum - Swap</title>
				<meta name="description" content="Coliseum project - Swawp" />
				<link rel="icon" href={logo.src} />
			</Head>
			<main className="m-0 min-h-screen h-fit w-screen bg-gradient-to-br from-[#201D26] to-[#1D1B20] p-0 overflow-x-hidden">
				<Navbar />
				<section className='w-full h-fit flex flex-row items-stretch justify-between gap-4 py-36 px-20'>
                    <div className='w-9/12 flex-grow'>
                        <Chartbox />
                    </div>
                    <div className='w-3/12 h-fit'>
                        <Swap />
                    </div>
                </section>
				<CommunitySection />
				<Footer />
			</main>
		</>
	)
}

export default SwapPage
