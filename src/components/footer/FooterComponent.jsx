import React from "react";
import "./FooterComponent.scss";
import "../darkmode/ThemeToggle";
import WatchComponent from "../watch/WatchComponent";
import ThemeToggle from "../darkmode/ThemeToggle";
import linkedIn from "../../assets/linkedin.png";

export default function FooterComponent() {
	return (
		<div>
			<footer className="footer--container">
				<ThemeToggle />
				<section className="footer--link__container">
					<a
						href="https://github.com/saraemiliajohnsson"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://avatars.githubusercontent.com/u/106734159?v=4"
							alt="GitHub"
							className="github-logo"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/sara-johnsson-709590269/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={linkedIn} alt="LinkedIn" className="linkedin-logo" />
					</a>
				</section>
				<WatchComponent />
			</footer>
		</div>
	);
}
