import { Navigate, useParams } from "react-router-dom";
import RecentBlogsList from "./RecentBlogsList";

class SpecializedLandingData {
  bio: React.ReactNode
  highlight: React.ReactNode
}

const landingPages = new Map<string, SpecializedLandingData>([
  ["test", {
    bio: (<>Bio Here</>),
    highlight: (
      <>
        Highlight Here
      </>
    ),
  }]
]);

export default function SpecializedLanding() {
  const { type } = useParams();

  const pageData = landingPages.get(type);

  if (pageData == undefined) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div className="flex flex-col md:flex-row bg-base-200">
        <div className="flex-1 text-left p-8 md:pr-4">
          {pageData.bio}
        </div>

        <div className="flex-1 p-8 md:pl-4 md:pt-4">
          {
            // TODO: Replace this with video clips or a web simulation of control theory because that is cool and flashy
          }

          <div className="w-full p-4">
            {pageData.highlight}
          </div>

          <RecentBlogsList />
        </div>
      </div>
    </>
  );
}
