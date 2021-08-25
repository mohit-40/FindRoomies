import React from 'react'
import "./Hero.css"
import Button from "./Button"


export default function Hero() {
	return (
		<div className="hero-container">
			<video src='/videos/video-1.mp4' autoPlay loop muted />
			<h1>Find Like-Minded Roommates</h1>
			<p>Share your room with right roommates</p>
			<div className="hero-btns">
				<Button children="GET STARTED" buttonSize="btn--large" buttonStyle="btn--outline" to="/sign-up" />
			</div>
			
		</div>
	)
}
