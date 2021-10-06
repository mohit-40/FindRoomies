import React from 'react'
import {LogMenuItems} from "../component/LogMenuItems"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Chat from "../component/messengerComponent/Chat"

function Message() {
	return (
		<>
			<Navbar menuItem={LogMenuItems} log={false} />
			<Chat />
			<Footer />
		</>
	)
}

export default Message
