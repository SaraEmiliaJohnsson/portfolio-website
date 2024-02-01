import React from "react";
import { useEffect, useState } from "react";
import "./GitHubApi.scss";

// Import images
import project1Image from "./images/cafecreme.png";
import project2Image from "./images/christmascard.png";
import project3Image from "./images/klonaensida.png";
import project4Image from "./images/memorygame.png";
import project5Image from "./images/parmarochpoesi.png";
import project6Image from "./images/taverna.png";

// Define a mapping between project IDs and their respective images
const imageMapping = {
	745169602: project1Image,
	735361949: project2Image,
	700987599: project2Image,
	725944709: project4Image,
	707613613: project5Image,
	734480971: project6Image,
};

// GitHubApi is a functional component that fetches GitHub project data and displays it.
export default function GitHubApi() {
	// API URL to fetch GitHub projects data
	const URL = "https://api.github.com/users/saraemiliajohnsson/repos";

	// State to store the fetched data
	const [data, setData] = useState([]);

	// useEffect is used to fetch data when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch data from the specified URL
				const response = await fetch(URL);
				// Parse the response as JSON
				const projects = await response.json();

				// Map each project with its corresponding image using the imageMapping
				const projectsWithImages = projects.map((project) => {
					const projectId = project.id;
					// Retrieve the image based on the project's ID
					let image = imageMapping[projectId];

					return {
						...project,
						image_url: image,
					};
				});

				// Set the state with the processed data
				setData(projectsWithImages);
				console.log(projectsWithImages);
			} catch (error) {
				// Handle errors if any occur during the fetch process
				console.error("Error fetching data:", error);
			}
		};

		// Call the fetchData function when the component mounts
		fetchData();
	}, []);

	return (
		<div className="github-api__container">
			<section className="github-api-inside__container">
				<h1>Mina Projekt</h1>
				<section className="project-cards">
					{data.map((repo) => (
						<article key={repo.id} className="project-card">
							<a
								href={repo.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								<h3>{repo.name}</h3>
							</a>

							<p>{repo.description}</p>
							<img
								key={repo.id}
								src={repo.image_url}
								alt={repo.name}
								className="project-image"
							/>
						</article>
					))}
				</section>
			</section>
		</div>
	);
}
