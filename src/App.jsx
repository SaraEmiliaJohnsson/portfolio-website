import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/darkmode/store";
import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./views/main/MainComponent";
import AboutComponent from "./views/about/AboutComponent";
import ProjectComponent from "./views/portfolio/ProjectComponent";
import ContactComponent from "./views/contact/ContactComponent";
import ErrorBoundary from "./components/errorboundry/ErrorBoundry";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
	return (
		// Provide Redux store to the entire application
		<Provider store={store}>
			{/* Set up React Router for navigation */}
			<Router>
				{/* Wrap the entire application in an error boundary to catch and handle errors */}
				<ErrorBoundary>
					<div className="main--container">
						<HeaderComponent />
						{/* React Router Routes */}
						<Routes>
							<Route path="/" element={<MainComponent />} />
							<Route path="/about" element={<AboutComponent />} />
							<Route path="/portfolio" element={<ProjectComponent />} />
							<Route path="/contact" element={<ContactComponent />} />
						</Routes>
						<FooterComponent />
					</div>
				</ErrorBoundary>
			</Router>
		</Provider>
	);
}

export default App;
