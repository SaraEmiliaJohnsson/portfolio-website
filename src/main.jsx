import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./components/darkmode/store.jsx";
import { toggleDarkMode } from "./components/darkmode/themeSlice";
import App from "./App.jsx";
import "./App.scss";

// Function to apply the dark mode theme to HTML elements based on the provided state
const applyThemeToHtmlElement = (darkMode) => {
	const body = document.body;
	if (body) {
		body.classList.toggle("dark-theme", darkMode);
	}

	const header = document.querySelector(".header--container");
	if (header) {
		header.classList.toggle("dark-theme", darkMode);
	}

	const main = document.querySelector(".main--container");
	if (main) {
		main.classList.toggle("dark-theme", darkMode);
	}

	const footer = document.querySelector(".footer--container");
	if (footer) {
		footer.classList.toggle("dark-theme", darkMode);
	}

	const links = document.querySelectorAll("a");

	links.forEach((link) => {
		link.classList.toggle("dark-theme", darkMode);
	});
};

// Subscribe to changes in the Redux store to apply the theme whenever it changes
store.subscribe(() => {
	const state = store.getState();
	applyThemeToHtmlElement(state.theme.darkMode);
});

// Render the React application with Redux Provider and initial dark mode state
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// Load the initial dark mode state from localStorage
const storedDarkMode = localStorage.getItem("darkMode");
const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;
store.dispatch(toggleDarkMode(initialDarkMode));
