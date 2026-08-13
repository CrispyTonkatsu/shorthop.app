import ProjectCard from "../components/cards/ProjectCard";
import { projectData } from "../data/projects/ProjectData";

export default function Projects() {
  // NOTE: Consider adding a filter functionality for different types of projects

  let isRight = false;

  return (
    <div className="flex flex-col min-h-1/2 place-content-center">
      {
        projectData.map(project => {
          const output = (
            <div className="p-4 md:p-8">
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
