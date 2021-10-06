import React from 'react'
import UserCard from "./UserCard"
import "./UserCardSection.css"

function UserCardSection() {
	return (
		<div className="UserCardSection-container">
			<UserCard />
			<UserCard />
			<UserCard />
		</div>
	)
}

export default UserCardSection
