import React from 'react'
import Navbar from "../component/Navbar"
import Hero from "../component/Hero"

import Footer from "../component/Footer"
import Bfooter from "../component/Bfooter"
import CardSection from "../component/CardSection"
import {HomeMenuItems} from "../component/HomeMenuItems"

export default function Home() {
	return (
		<>
			<Navbar menuItem={HomeMenuItems} login={true} />
			<Hero />
			<CardSection />
			<Bfooter />
			<Footer />
		</>
	)
}
