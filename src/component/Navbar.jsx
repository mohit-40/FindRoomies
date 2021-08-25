import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import NavItem from "./NavItem"
import './Navbar.css';


function Navbar(props) {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) { setButton(false); } 
		else { setButton(true); }
	};
	window.addEventListener('resize', showButton);
	useEffect(() => { showButton(); }, []);

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<Link to='/' className='navbar-logo' onClick={closeMobileMenu}> Find Roomie <i class='fab fa-typo3' /></Link>
				<div className='menu-icon' onClick={handleClick}> <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> </div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					{props.menuItem.map((item,index)=>{
						return( <NavItem index={index} title={item.title}  class={item.cName} url={item.url} closeMobileMenu={closeMobileMenu} /> )
					})}
				</ul>
				{props.login && button && <Button  buttonStyle='btn--outline' to="/sign-up">SIGN UP</Button>}
				{props.login && button && <Button buttonStyle='btn--outline' to="/sign-in">SIGN IN</Button>}
			</div>
		</nav>
	);
}

export default Navbar;