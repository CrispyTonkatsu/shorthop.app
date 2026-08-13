import type { ProjectCardProps } from "../../components/cards/ProjectCard";

// TODO: Add the writeup section to this or the alternate data type
// NOTE: This would maybe be better off as its own data type that then has a mapping function to be a ProjectCardProps

export const projectData: ProjectCardProps[] = [
	{
		projectName: "Idol On Duty",
		teamName: "Backstage Crew",
		projectRoles: ["Tech Lead", "Gameplay Engineer", "Tools Development"],
		description: "Worked with an interdisciplinary 18 people team to develop an Unreal Engine 5 action game in 8 months.",
		projectPage: "/idolonduty",
		// TODO: Consider changing this so that I can write the content that will be displayed in there for image carousels
		image: "https://games.digipen.edu/system/photos/14616/original/Idolonduty_Screenshot08.png"
	},
	{
		projectName: "Hockey Stop",
		teamName: "Non-Applicable Studio",
		projectRoles: ["Producer", "Physics Engine Developer", "Compute Physics Engineer", "Input Systems Engineer", "UI Framework"],
		description: "Utilized the Non-Applicable Engine to develop a 2D platformer and improved the engine for better low-code workflows and performance.",
		projectPage: "/hockey-stop",
		// TODO: Add image
		image: ""
	},
	{
		projectName: "Non-Applicable Engine",
		teamName: "Non-Applicable Studio",
		projectRoles: ["Producer", "Physics Engine Developer", "Core-Systems Engineer"],
		description: "Developed a custom 2D game engine in a 4 people team with the goal of supporting physics-based platforming mechanics.",
		projectPage: "/non-applicable-engine",
		// TODO: Add image
		image: ""
	}
]

// TODO: Implement this for the homepage
export const topProjectData: ProjectCardProps[] = []

