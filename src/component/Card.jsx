import React from 'react'
import "./Card.css"
function Card(props) {
	return (
		<div className="card">
			<div className="card-container">
				<img className="card-img" src={props.src} alt="img" />
				<h1 className="card-heading">{props.heading} </h1>
				<p className="card-desp"> {props.desp}</p>
			</div>
		</div>
	)
}

export default Card
