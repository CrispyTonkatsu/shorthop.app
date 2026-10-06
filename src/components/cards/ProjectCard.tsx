import { Link } from "react-router-dom";
import { format, formatDistanceStrict } from "date-fns";
import type React from "react";

export class ProjectCardImage {
  link: string
  alt?: string
}

export interface ProjectCardProps {
  // Project Info
  projectName: string,
  linkSection?: React.ReactNode,
  teamName: string,
  projectRoles: string[],
  start: Date
  end: Date
  description: string,
  // Visual Info
  images?: ProjectCardImage[]
  // Website info
  projectPage: string
  isRight?: boolean
};

export default function ProjectCard({ projectName, linkSection = null, teamName, projectRoles, start, end, description, images = null, projectPage = '', isRight = false }: ProjectCardProps) {
  const readMoreButton = projectPage == "" ?
    null : (<Link
      to={projectPage}
      className="btn btn-accent btn-outline w-full"
    >
      Read More
    </Link>);

  const dateFormat = "Y-MMM";
  const startString = format(start, dateFormat);
  const endString = format(end, dateFormat);

  const durationString = formatDistanceStrict(end, start, {
    unit: "month"
  });

  return (
    <div className={`flex flex-col h-3/5 ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="flex-2 flex flex-col bg-base-100 p-4 md:p-8">

        <div className="flex flex-row justify-between w-full">
          <div className="text-2xl text-primary font-bold italic">
            {projectName}
          </div>

          <div className="text-secondary text-xs md:text-lg place-self-center">
            {linkSection}
          </div>
        </div>

        <div className="flex flex-row text-xs md:text-lg text-info font-light">
          <div className="flex-1 text-start">
            {teamName}
          </div>

          <div className="flex-2 italic text-end">
            {startString} - {endString} ({durationString})
          </div>

        </div>

        <div className="flex flex-col md:flex-row md:gap-4 py-2">
          {
            projectRoles.map(role => {
              return (
                <div
                  key={role}
                  className="font-light text-xs md:text-sm">
                  {role}
                </div>
              );
            })
          }
        </div>

        <div>{description}</div>

        <div className="hidden md:inline mt-auto">
          {readMoreButton}
        </div>
      </div>

      {
        images ?
          <div className="flex-1 flex flex-col p-4 gap-2 bg-base-100/50">
            <div className="carousel carousel-center">
              {
                images.map(image => {
                  return (
                    <div id={image.link} className="carousel-item w-full">
                      <img
                        src={image.link}
                        alt={image.alt}
                      />
                    </div>
                  );
                })
              }
            </div>
            {
              images.length > 1 ?
                <div className="flex flex-row w-full justify-center gap-2">
                  {
                    images.map((image, index) => {
                      return (
                        <a href={"#" + image.link} className="btn btn-circle btn-neutral btn-xs" >{index + 1}</a>
                      );
                    })
                  }
                </div>
                : null
            }
          </div>
          : null
      }

      <div className="inline md:hidden bg-base-100/50">
        {readMoreButton}
      </div>
    </div>
  );
}
