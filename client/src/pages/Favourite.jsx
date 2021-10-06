import React from 'react'
import {LogMenuItems} from "../component/LogMenuItems"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import UserCardSection from "../component/UserCardSection"

function Favourite() {
	return (
		<>
			<Navbar menuItem={LogMenuItems} log={false} />
			<UserCardSection />
			<Footer />
		</>
	)
}

export default Favourite
