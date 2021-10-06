import React from 'react'
import Button from "./Button"
import "./Bfooter.css"

function Bfooter() {
	return (
		<div className="Bfooter">

			<div className="joinnow-container">
				<h1>Find a roommate today!</h1>
				<p>Sign up now, it's free to get started.</p>
				<Button to="/sign-up"> Sign Up Now</Button>
			</div>

			<div className="cities-container">
				<h1 className="cities-section-heading">Popular cities</h1>
				<ul className="nearby-cities">
					<li>Mumbai</li>
					<li>Delhi</li>
					<li>Banglore</li>
					<li>Kolkata</li>
					<li>Kota</li>
					<li>Jaipur</li>
					<li>Bhopal</li>
					<li>Ajmer</li>
					<li>Jaisalmer</li>
					<li>Udaipur</li>
					<li>Panipat</li>
					<li>Kolkata</li>
					<li>Kota</li>
					<li>Jaipur</li>
					<li>Bhopal</li>
					<li>Ajmer</li>
					<li>Jaisalmer</li>
					<li>Udaipur</li>
					<li>Panipat</li>
					<li>Manali</li>
					<li>Gandhinagar</li>
					<li>Patna</li>
					<li>Gurgaon</li>
					<li>Pune</li>
					<li>Jammu</li>
					<li>Chennai</li>
					<li>Lucknow</li>
					<li>Nagpur</li>
					<li>indore</li>
					<li>noida</li>
					<li>vellore</li>
					<li>Chandigardh</li>
					<li>shimla</li>
					<li>jabalpur</li>
					<li>Goa</li>
					<li>Bikaner</li>
				</ul>
			</div>
		</div>
	)
}

export default Bfooter
