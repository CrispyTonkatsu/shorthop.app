import { Navigate, useParams } from "react-router-dom";
import RecentBlogsList from "./RecentBlogsList";
import Projects from "../pages/Projects";
import { useRef } from "react";
import JumperFab from "./JumperFab";

class SpecializedLandingData {
  bio: React.ReactNode
  highlight: React.ReactNode
  projects: string[]
}

const landingPages = new Map<string, SpecializedLandingData>([
  ["test", {
    bio: (<>Bio Here</>),
    highlight: (<>Highlight Here</>),
    projects: ["IdolOnDuty"]
  }]
]);

export default function SpecializedLanding() {
  const { type } = useParams();

  const pageData = landingPages.get(type);

  const targetSectionRef = useRef(null);

  if (pageData == undefined) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div className="flex flex-col md:flex-row bg-base-200">
        <div className="flex-1 text-left p-8 md:pr-4">
          <p className="text-4xl pb-4">
            Hello, I'm
            <div className="btn-link text-info font-bold">
              <a href="https://www.linkedin.com/in/edgar-donoso-mansilla">Edgar Jose Donoso Mansilla</a>
            </div>
          </p>

          <div className="flex-1 text-left md:pr-4">
            {pageData.bio}
          </div>
        </div>

        <div className="flex-1 p-8 md:pl-4 md:pt-4">
          <div className="w-full p-4">
            {pageData.highlight}
          </div>

          <RecentBlogsList />
        </div>
      </div>

      <JumperFab
        targetSectionRef={targetSectionRef}
      />

      <div className="flex flex-col p-8 pb-0">
        <button
          className="btn btn-secondary text-2xl"
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

      <Projects />
    </>
  );
}
