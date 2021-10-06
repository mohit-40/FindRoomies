import React from 'react'
import "./Footer.css"

function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-line1">
					<div className="footer-logo">FindRoomie<i class='fab fa-typo3' /></div>
					<div className="footer-copyright">@All right reserved</div>
				</div>
				<div className="footer-icons">
					<i className="footer-icon fab fa-instagram"></i>
					<i class="footer-icon fab fa-facebook-square"></i>
					<i class="footer-icon fab fa-twitter"></i>
				</div>
			</div>
		</footer>
	)
}

export default Footer
