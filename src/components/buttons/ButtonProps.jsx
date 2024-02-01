import React from "react";
import "./ButtonStyling.scss";

// a prop to set button's label text.
function ButtonProps(props) {
	return (
		<div>
			<button className="styling-btn">{props.text}</button>
		</div>
	);
}

export default ButtonProps;
