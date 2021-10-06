import React from 'react'
import {LogMenuItems} from "../component/LogMenuItems"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Section from "../component/messengerComponent/Section"

function Message() {
	return (
		<>
			<Navbar menuItem={LogMenuItems} log={false} />
			<Section />
			<Footer />
		</>
	)
}

export default Message
