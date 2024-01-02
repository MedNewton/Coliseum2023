import { type NextPage } from 'next'
import Head from 'next/head'

// Components : 
import Navbar from '@/components/navbar'
import Benefits from '@/components/Benefits'
import BuyCMAX from '@/components/BuyCMAX'
import StakingPool from '@/components/StakingPool'
import StakeAmount from '@/components/StakeAmount'
import StakingStats from '@/components/StakingStats'
import MarketsSection from '@/components/Markets'
import CommunitySection from '@/components/Community'
import Footer from '@/components/Footer'
// Assets 
import logo from '@assets/images/lg.png'

const Stake: NextPage = () => {
	return (
		<>
			<Head>
				<title>Coliseum - Stake</title>
				<meta name="description" content="Coliseum project - Stake" />
				<link rel="icon" href={logo.src} />
			</Head>
			<main className="m-0 min-h-screen h-fit w-screen bg-gradient-to-br from-[#201D26] to-[#1D1B20] p-0 overflow-x-hidden">
				<Navbar />
				<Benefits />
                <BuyCMAX />
                <StakingPool />
                <StakeAmount />
                <StakingStats />
				<MarketsSection />
				<CommunitySection />
				<Footer />
			</main>
		</>
	)
}

export default Stake
