import React, { useState } from "react";
import "./ContactComponent.scss";
import ButtonProps from "../../components/buttons/ButtonProps";

const ContactComponent = () => {
	const [formData, SetFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		SetFormData(prevData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="contact--container">
			<section className="contact--inside__container">
				<h4>Kontakta mig genom detta formulär</h4>
				<form onSubmit={handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							autoComplete="name"
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Email:
						<input
							type="text"
							name="email"
							autoComplete="email"
							onChange={handleChange}
						/>
					</label>
					<br />
					<label>
						Message:
						<br />
						<textarea
							name="message"
							cols="40"
							rows="10"
							placeholder="Skriv ditt meddelande här..."
							onChange={handleChange}
						/>
					</label>
					<br />
					<div className="form--btn">
						<ButtonProps text="Skicka meddelande" type="submit" />
					</div>
				</form>
			</section>
		</div>
	);
};

export default ContactComponent;
