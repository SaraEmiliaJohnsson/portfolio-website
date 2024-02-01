import React, { Component } from "react";

// ErrorBoundary: A React component that acts as an error boundary,
// catching JavaScript errors in its child component tree.
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	// componentDidCatch: A lifecycle method called when an error is thrown
	// in any of the child components. It updates the state and logs the error.
	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true });
		console.error("Error caught by error boundary:", error, errorInfo);
	}

	// render: Renders the child components or a fallback UI if an error has occurred.
	render() {
		if (this.state.hasError) {
			return <p>Something went wrong!</p>; // You can customize the fallback UI
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
