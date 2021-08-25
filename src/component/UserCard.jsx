import React from 'react'
import "./UserCard.css"
function UserCard() {
	return (
		<div className="usercard">
			<div className="usercard-container">
				<img className="usercard-img" src="./images/img-2.jpg" alt="img" />
				<div className="usercard-info">
					<div className="usercard-name usercard-info1"> Mohit Agrawal</div>
					<div className="usercard-address usercard-info1">504 sector A shree nath puram Kota,Raj </div>
					<div className="usercard-price usercard-info1">Rent: 1000</div>
					<div className="usercard-age usercard-info1">21 year old</div>
				</div>
				<div className="usercard-btn-container">
					<button className="usercard-btn">Message</button>
					<button className="usercard-btn">Add Friend</button>
				</div>
			</div>
		</div>
	)
}

export default UserCard
