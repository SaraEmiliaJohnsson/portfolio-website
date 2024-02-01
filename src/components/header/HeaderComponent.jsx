import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
import MobileMenu from "../hamburgermenu/MobileMenu";
import { formatProdErrorMessage } from "@reduxjs/toolkit";

export default function HeaderComponent() {
	// State to manage the visibility of the mobile menu
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Function to toggle the visibility of the mobile menu
	const handleToggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className="header--container">
			<section className="logo--container">
				SA <br />
				RA
			</section>
			<section className="nav--container">
				<div className="hamburger-menu-icon" onClick={handleToggleMobileMenu}>
					☰
				</div>
				{isMobileMenuOpen && <MobileMenu onClose={handleToggleMobileMenu} />}
				<ul className="list--container">
					<li className="list-item">
						<Link to="/">Home</Link>
					</li>
					<li className="list-item">
						<Link to="/about">Om mig</Link>
					</li>
					<li className="list-item">
						<Link to="/portfolio">Projekt</Link>
					</li>
					<li className="list-item">
						<Link to="/contact">Kontakt</Link>
					</li>
				</ul>
			</section>
		</div>
	);
}
