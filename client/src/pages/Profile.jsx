import React from 'react'
import {LogMenuItems} from "../component/LogMenuItems"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import User from "../component/User"


function Profile() {
	return (
		<>
			<Navbar menuItem={LogMenuItems} log={false} />
			<User/>
			<Footer />
		</>
	)
}

export default Profile

