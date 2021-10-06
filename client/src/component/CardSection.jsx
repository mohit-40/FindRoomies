import React from 'react'
import Card from "./Card"
function CardSection() {
	return (
		<div className="card-section">
			<div className="card-section-heading">Why Us??</div>
			<div className="all-cards">
				<Card src="./images/verifiedid.png" heading="Verified User" desp="Users can verify identity through multiple sources so you can search with confidence! Our" />
				<Card src="./images/perfectmatch.png" heading="Connect With Messenger" desp="Communicate with potential roommates using our website" />
				<Card src="./images/connect.png" heading="Perfect Match" desp="Create your personal roommate profile and get started in minutes!" />
			</div>
		</div>
	)
}

export default CardSection
