import React from 'react'
import {LogMenuItems} from "../component/LogMenuItems"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Filter from "../component/Filter"
import UserCardSection from "../component/UserCardSection.jsx"

function Match() {
	return (
		<>
			<Navbar menuItem={LogMenuItems} log={false} />
			<Filter />
			<UserCardSection/>
			<Footer />
		</>
	)
}

export default Match
