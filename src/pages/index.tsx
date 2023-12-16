import { type NextPage } from 'next'
import Head from 'next/head'

// Components : 
import Hero from '@/components/HeroSection'
import TreasurySection from '@/components/Treasury'
import DiscoverSection from '@/components/Discover'
import TechnologySection from '@/components/Technology'
import MarketsSection from '@/components/Markets'
import CommunitySection from '@/components/Community'
import Footer from '@/components/Footer'
// Assets 
import logo from '@assets/images/logo.png'

const Dashboard: NextPage = () => {
	return (
		<>
			<Head>
				<title>Coliseum</title>
				<meta name="description" content="Coliseum project" />
				<link rel="icon" href={logo.src} />
			</Head>
			<main className="m-0 min-h-screen h-fit w-screen bg-gradient-to-br from-[#201D26] to-[#1D1B20] p-0 overflow-x-hidden">
				<Hero />
				<TreasurySection />
				<DiscoverSection />
				<TechnologySection />
				<MarketsSection />
				<CommunitySection />
				<Footer />
			</main>
		</>
	)
}

export default Dashboard
