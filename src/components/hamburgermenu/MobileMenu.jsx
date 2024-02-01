import React from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.scss";

// MobileMenu is a functional component representing the mobile navigation menu.
// It takes isOpen (boolean) to determine if the menu is open and onClose (function) to close the menu.
const MobileMenu = ({ isOpen, onClose }) => {
	return (
		<div>
			{/* Mobile menu overlay that covers the screen when the menu is open */}
			<div
				className={`mobile-menu-overlay ${isOpen ? "menu-open" : ""}`}
				onClick={onClose}
			></div>
			<div className={`mobile-menu--container ${isOpen ? "menu-open" : ""}`}>
				<ul className="mobile-list--container">
					<li className="mobile-list-item">
						<Link to="/" onClick={onClose}>
							Home
						</Link>
					</li>
					<li className="mobile-list-item">
						<Link to="/about" onClick={onClose}>
							Om mig
						</Link>
					</li>
					<li className="mobile-list-item">
						<Link to="/portfolio" onClick={onClose}>
							Projekt
						</Link>
					</li>
					<li className="mobile-list-item">
						<Link to="/contact" onClick={onClose}>
							Kontakt
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileMenu;
