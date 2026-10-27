import { Navigate, useParams } from "react-router-dom";
import RecentBlogsList from "./RecentBlogsList";
import Projects from "../pages/Projects";
import { useRef } from "react";
import JumperFab from "./JumperFab";
import Bio from "./Bio";

class SpecializedLandingData {
  bio: React.ReactNode
  highlight: React.ReactNode
  projects?: string[]
}

const landingPages = new Map<string, SpecializedLandingData>([
  ["personal", {
    bio: (<Bio title="Personal Page" />),
    highlight: (<>No Highlight Here</>),
  }],

  ["test", {
    bio: (<Bio title="Test Title" />),
    highlight: (null),
    projects: ["idol-on-duty", "idol-on-duty"]
  }]
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
              <a href="https://www.linkedin.com/in/edgar-donoso-mansilla">Edgar Jose Donoso Mansilla</a>
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
        pageData.projects ? <HighlightProjects projects={pageData.projects} /> : null
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
