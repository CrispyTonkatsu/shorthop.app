interface ProjectCardProps {
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
  return (
    <div className={"flex flex-col md:flex-row h-3/4 p-4 " + (isRight ? "justify-end" : "justify-start")}>
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
                <div className="font-extralight pe-1">
                  {role}
                </div>
              );
            })
          }
        </div>

        <div>
          thisis some test text that will boil down into the total iof 3 sentences or so Idk how much is a good idea here but yeah here we have it a bunch of rtext on the screen taht has a lot o ftypes alksjdlaksjdklj
        </div>
      </div>
    </div >
  );
}
