import { Navigate, useParams } from "react-router-dom";
import RecentBlogsList from "./RecentBlogsList";
import Projects from "../components/Projects";
import { useRef } from "react";
import JumperFab from "./JumperFab";
import Bio from "./Bio";

class SpecializedLandingData {
  bio: React.ReactNode
  highlight: React.ReactNode
  projects?: string[]
}

const landingPages = new Map<string, SpecializedLandingData>([
  ["sim", {
    bio: (<Bio title="Simulation Engineer" />),
    highlight: (null),
    projects: ["idol-on-duty"]
  }],

  ["personal", {
    bio: (<Bio title="Personal Page" />),
    highlight: (<>No Highlight Here</>),
  }],
]);

export default function SpecializedLanding() {
  const { type } = useParams();

  const pageData = landingPages.get(type);

  if (pageData == undefined) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 md:py-8">
        <div className="flex-1 text-left">
          <div className="text-xl md:text-3xl">
            Hello, I'm
            <div className="btn-link text-info font-bold">
              <a href="https://www.linkedin.com/in/edgar-donoso-mansilla" className="inline-flex">
                Edgar Jose Donoso Mansilla
                <svg className="w-5 h-5 text-base" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-1 text-left">
            {pageData.bio}
          </div>
        </div>

        <div className="flex-1 pt-4 md:pt-0">
          {pageData.highlight}
          <RecentBlogsList />
        </div>
      </div>

      {
        pageData.projects ?
          <HighlightProjects projects={pageData.projects} />
          : null
      }
    </div>
  );
}

interface HighlightProjectsProps {
  projects: string[]
}

function HighlightProjects({ projects }: HighlightProjectsProps) {
  const targetSectionRef = useRef(null);

  return (
    <div className="">
      <JumperFab
        targetSectionRef={targetSectionRef}
      />

      <div className="flex flex-col">
        <button
          className="btn btn-primary btn-outline text-2xl"
          ref={targetSectionRef}
          onClick={
            () => {
              targetSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        >
          Projects
        </button>
      </div>

      <Projects selectedProjects={projects} />
    </div>
  );
}
