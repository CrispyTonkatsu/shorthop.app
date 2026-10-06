import type { ProjectCardProps } from "../../components/cards/ProjectCard";

export const projectData = new Map<string, ProjectCardProps>([
	["idol-on-duty", {
		projectName: "Idol On Duty",
		teamName: "Backstage Crew",
		projectRoles: ["Tech Lead", "Gameplay Engineer", "Tools Development"],
		start: new Date(2025, 8),
		end: new Date(2025, 8),
		description: "Worked with an interdisciplinary 18 people team to develop an Unreal Engine 5 action game in 8 months.",
		projectPage: "/markdown/projects/idol-on-duty",
		images: [
			{ link: "https://games.digipen.edu/system/photos/14616/original/Idolonduty_Screenshot08.png" },
			{ link: "https://images.unsplash.com/photo-1536873602512-8e88cc8398b1?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTc5MTI0MDUxOXw&ixlib=rb-4.1.0&q=85&w=2640" },
		],
	}],

	["hockey-stop", {
		projectName: "Hockey Stop",
		teamName: "Non-Applicable Studio",
		projectRoles: ["Producer", "Physics Engine Developer", "Compute Physics Engineer", "Input Systems Engineer", "UI Framework"],
		start: new Date(2025, 9),
		end: new Date(2025, 9),
		description: "Utilized the Non-Applicable Engine to develop a 2D platformer and improved the engine for better low-code workflows and performance.",
		projectPage: "/hockey-stop",
		// TODO: Add image
	}],

	["na-engine", {
		projectName: "Non-Applicable Engine",
		teamName: "Non-Applicable Studio",
		projectRoles: ["Producer", "Physics Engine Developer", "Core-Systems Engineer"],
		start: new Date(2025, 9),
		end: new Date(2025, 9),
		description: "Developed a custom 2D game engine in a 4 people team with the goal of supporting physics-based platforming mechanics.",
		projectPage: "/non-applicable-engine",
		// TODO: Add image
	}]
]);
