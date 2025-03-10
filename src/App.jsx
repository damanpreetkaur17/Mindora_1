import React from 'react'
import Navbar from './pages/components/Home/Navbar'
import Hero from './pages/components/Home/Hero'
import Services from './pages/components/Home/Services'
import Pricing from './pages/components/Home/Pricing'
import FAQ from './pages/components/Home/FAQ'
import Team from './pages/components/Home/Team'
import Footer from './pages/components/Home/Footer'

function App() {
	return (
		<div>
			<Navbar />

			<div id="home">
				<Hero />
			</div>

			<div id="services">
				<Services />
			</div>

			<div id="team">
				<Team />
			</div>

			<div id="pricing">
				<Pricing />
			</div>

			<div id="faq">
				<FAQ />
			</div>

			<Footer />
		</div>
	)
}

export default App