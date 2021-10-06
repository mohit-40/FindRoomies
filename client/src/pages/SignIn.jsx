import React from 'react'
import { Link } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import "./SignIn.css";
import {HomeMenuItems} from "../component/HomeMenuItems"

export default function signin() {
	return (
		<>
			<Navbar menuItem={HomeMenuItems} login={true} />
			<div className="signin">
				.
				<div className="signin-container">
					<h1 className="signin-heading">Welcome Back!!</h1>
					<p>Sign in... your matches are waiting.</p>
					<hr />
					<div className="signin-social-btns">
						<button className="signin-google signin-social-btn signin-btn">
							<i class="fab fa-google"></i> |   signin Using Gmail
						</button>
						<button className="signin-facebook signin-social-btn signin-btn"> 
							<i class="fab fa-facebook"></i>|   signin Using Gmail
						</button>
					</div>
					OR
					<form action="/profile" method="get" className="signin-form">
						<input type="email" name="email" id="email" placeholder="Email" />
						<input type="password" name="password" id="password" placeholder="password" />
						<button type="submit" className="signin-btn">Sign In</button>

						<div className="signin-term">
							Not a member? <Link to="/sign-up">Sign Up</Link>
						</div>
						<hr />
						<div className="signin-term">
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
