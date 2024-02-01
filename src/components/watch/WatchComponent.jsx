import React, { useState, useEffect } from "react";
import "./WatchComponent.scss";

// A function to display the current time
const WatchComponent = () => {
	// State variables to manage if the component is live and the current time
	const [isLive, setIsLive] = useState(false);
	const [currentTime, setCurrentTime] = useState(new Date());

	// useEffect is used to handle side effects in functional components.
	useEffect(() => {
		const intervalId = setInterval(() => {
			// Update the current time every second.
			setCurrentTime(new Date());
			console.log("Fetching live data..");
		}, 1000);

		// Clears the interval when the component is unmounted or when 'isLive' changes.
		return () => clearInterval(intervalId);
	}, [isLive]);

	return (
		<div className="watch--container">
			<section className="watch--inside__container">
				<p className="time--container">
					Klockan är: {currentTime.toLocaleTimeString()}
				</p>
			</section>
		</div>
	);
};

export default WatchComponent;
