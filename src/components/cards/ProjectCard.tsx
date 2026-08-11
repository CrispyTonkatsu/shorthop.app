import { Link } from "react-router-dom";

export interface ProjectCardProps {
  // Project Info
  projectName: string,
  teamName: string,
  projectRoles: string[],
  description: string,
  // Visual Info
  image?: string
  imageAlt?: string
  // Website info
  projectPage: string
  isRight?: boolean
};

export default function ProjectCard({ projectName, teamName, projectRoles, description, image = '', imageAlt = '', projectPage = '', isRight = false }: ProjectCardProps) {
  const readMoreButton = projectPage == "" ?
    null : (<Link
      to={projectPage}
      className="btn btn-secondary btn-dash w-full"
    >
      Read More
    </Link>);

  return (
    <div className={`flex flex-col h-3/5 ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="flex flex-col bg-base-100 p-8">
        <div className="text-2xl text-primary font-bold italic">
          {projectName}
        </div>

        <div className="text-lg text-info font-light">
          {teamName}
        </div>

        <div className="flex flex-row overflow-x-scroll">
          {
            projectRoles.map(role => {
              return (
                <div
                  key={role}
                  className="font-extralight pe-1">
                  {role}
                </div>
              );
            })
          }
        </div>

        <div>
          {
            // TODO: Consider making an expand button for mobile
            description
          }
        </div>

        <div className="hidden md:inline mt-auto pt-4">
          {readMoreButton}
        </div>
      </div>

      <figure className="p-8 bg-base-100/50">
        <img
          src={image}
          alt={imageAlt}
        />
      </figure>

      <div className="flex md:hidden flex-col bg-base-100/50 p-4">
        {readMoreButton}
      </div>
    </div>
  );
}
