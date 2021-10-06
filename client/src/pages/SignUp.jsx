import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import "./SignUp.css";
import {HomeMenuItems} from "../component/HomeMenuItems";
export default function SignUp() {
	return (
		<>
			<Navbar menuItem={HomeMenuItems} login={true} />
			<div className="signup">
				.
				<div className="signup-container">
					<h1 className="signup-heading">Join for free</h1>
					<p>Sign up now and find your Roommate Today</p>
					<hr />
					<div className="signup-social-btns">
						<button className="signup-google signup-social-btn signup-btn">
							<i class="fab fa-google"></i> |   SignUp Using Gmail
						</button>
						<button className="signup-facebook signup-social-btn signup-btn"> 
							<i class="fab fa-facebook"></i>|   SignUp Using Gmail
						</button>
					</div>
					OR
					<form action="/sign-up-where" className="signup-form">
						<input type="text" name="fname" id="fname" placeholder="First Name" />
						<input type="text" name="lname" id="lname" placeholder="Last Name" />
						<input type="email" name="email" id="email" placeholder="Email" />
						<input type="password" name="password" id="password" placeholder="password" />
						<div>
							<input type="radio" id="have" name="room" value="I have a room" />
							<label for="have">I have a room</label>
							<input type="radio" id="need" name="room" value="I need a room" />
							<label for="need">I need a room</label>
						</div>

						<button type="submit" className="signup-btn">Sign Up</button>

						<div className="signup-term">
							Already a member? <Link to="/sign-in">Sign In</Link>
						</div>
						<hr />
						<div className="signup-term">
							By signing up for a Roommates.com account, you affirm that you have read, understand, and agree to the Terms of Service Agreement.
						</div>
					</form>

				</div>
				.
			</div>
			<Footer />
		</>
	)
}
