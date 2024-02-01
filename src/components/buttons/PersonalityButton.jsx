import React, { useState } from "react";
import "./ButtonStyling.scss";

const PersonalityButton = () => {
	const personalityTraits = [
		"Nyfiken",
		"Kreativ",
		"Omtänksam",
		"Noggrann",
		"Stresstålig",
		"Bra på att sammarbeta",
		"God arbetsmoral",
		"Problemlösare",
	];

	const [currentTrait, setCurrentTrait] = useState("");

	const handleButtonClick = () => {
		// Randomly select a trait from the array
		const randomIndex = Math.floor(Math.random() * personalityTraits.length);
		const randomTrait = personalityTraits[randomIndex];

		setCurrentTrait(randomTrait);
	};

	return (
		<div className="personality--btn">
			<button className="styling-btn" onClick={handleButtonClick}>
				Klicka fram mina egenskaper
			</button>
			<p className="personality--text">{currentTrait}</p>
		</div>
	);
};

export default PersonalityButton;
