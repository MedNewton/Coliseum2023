import { type NextPage } from 'next'
import Head from 'next/head'

// Components : 
import Navbar from '@/components/navbar'
import AboutUs from '@/components/AboutUs'
import Roadmap from '@/components/Roadmap'
import MarketsSection from '@/components/Markets'
import CommunitySection from '@/components/Community'
import Footer from '@/components/Footer'
// Assets 
import logo from '@assets/images/lg.png'

const Trade: NextPage = () => {
	return (
		<>
			<Head>
				<title>Coliseum - About</title>
				<meta name="description" content="Coliseum project - About" />
				<link rel="icon" href={logo.src} />
			</Head>
			<main className="m-0 min-h-screen h-fit w-screen bg-gradient-to-br from-[#201D26] to-[#1D1B20] p-0 overflow-x-hidden">
				<Navbar />
				<AboutUs />
                <Roadmap />
				<MarketsSection />
				<CommunitySection />
				<Footer />
			</main>
		</>
	)
}

export default Trade
