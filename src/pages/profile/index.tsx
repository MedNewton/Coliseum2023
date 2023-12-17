import { type NextPage } from 'next'
import Head from 'next/head'

// Components : 
import Navbar from '@/components/navbar'
import ProfileTopSection from '@/components/ProfileTopSection'
import AccountStats from '@/components/AccountStats'
import PandL from '@/components/PandL'
import Holdings from '@/components/Holdings'
import Footer from '@/components/Footer'
// Assets 
import logo from '@assets/images/logo.png'

const Trade: NextPage = () => {
	return (
		<>
			<Head>
				<title>Coliseum - Profile</title>
				<meta name="description" content="Coliseum project - Profile" />
				<link rel="icon" href={logo.src} />
			</Head>
			<main className="m-0 min-h-screen h-fit w-screen bg-gradient-to-br from-[#201D26] to-[#1D1B20] p-0 overflow-x-hidden">
				<Navbar />
				<ProfileTopSection />
				<AccountStats />
				<PandL />
				<Holdings />
				<Footer />
			</main>
		</>
	)
}

export default Trade
