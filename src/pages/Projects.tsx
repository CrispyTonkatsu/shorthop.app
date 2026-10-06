import ProjectCard, { type ProjectCardProps } from "../components/cards/ProjectCard";
import { projectData } from "../content/projects/ProjectData";

export interface ProjectsProps {
  selectedProjects?: string[]
};

export default function Projects({ selectedProjects = null }: ProjectsProps) {
  const toDisplay: ProjectCardProps[] = (
    selectedProjects ?
      selectedProjects.filter(project => projectData.has(project)).map(project => projectData.get(project))
      : [...projectData.values()]);

  let isRight = false;

  return (
    <div className="flex flex-col min-h-1/2 place-content-center">
      {
        toDisplay.map((project: ProjectCardProps) => {
          const output = (
            <div className="px-2 md:px-8 py-4">
              <ProjectCard
                {...project}
                isRight={isRight}
              />
            </div>
          );

          isRight = !isRight;

          return output;
        })
      }
    </div>
  );
}
