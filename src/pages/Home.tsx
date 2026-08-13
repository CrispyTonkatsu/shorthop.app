import { useRef } from "react";
import Bio from "../components/Bio";
import RecentBlogsList from "../components/RecentBlogsList"; import JumperFab from "../components/JumperFab";
import ProjectCard from "../components/cards/ProjectCard";
import { projectData } from "../content/projects/ProjectData";

export default function Home() {
  const arrow_down = (
    <svg className="w-6 h-6 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
    </svg>
  );

  const targetSectionRef = useRef(null);

  let isRight = false;

  return (
    <>
      <div className="flex flex-col md:flex-row bg-base-200">
        <div className="flex-1">
          <Bio />
        </div>

        <div className="flex-1 p-4 md:pl-4 pt-0 md:pt-4">

          {
            // TODO: Replace this with video clips or a web simulation of control theory because that is cool and flashy
          }
          <div className="flex flex-row justify-center p-4">
            <img
              className="h-50"
              src="https://images.unsplash.com/photo-1575639807401-0c333374e3ed?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTc4NjMwMzExN3w&ixlib=rb-4.1.0&q=85&w=1920"
              alt="Soon to be something running here"
            />
          </div>

          <RecentBlogsList />
        </div>
      </div>

      <JumperFab
        targetSectionRef={targetSectionRef}
      />

      <div className="flex flex-col p-4">
        <button
          className="btn text-secondary btn-ghost text-2xl"
          ref={targetSectionRef}
          onClick={
            () => {
              targetSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        >
          {arrow_down} Projects {arrow_down}
        </button>

        <section className="divider divider-secondary" />

        {
          // TODO: Change this so that the projects shown are the top 3 selected
        }

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
    </>
  );
}
