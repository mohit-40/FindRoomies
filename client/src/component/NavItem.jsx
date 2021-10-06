import React from 'react'
import { Link } from 'react-router-dom';

export default function NavItem(props) {
	return (
		<li className='nav-item'>
			<Link to={props.url} index={props.index}  className={`nav-links ${props.class}`} onClick={props.closeMobileMenu}> {props.title} </Link>
		</li>
	)
}