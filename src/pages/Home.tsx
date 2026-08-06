import Bio from "../components/Bio";
import RecentBlogsList from "../components/RecentBlogsList";

export default function Home() {
  // TODO: Consider trying to get a video/running version of the project in this start area

  return (
    <div className="flex">
      <div className="w-1/2 p-8 pr-4">
        <Bio />
      </div>

      <div className="w-1/2 p-8 pl-4">
        <RecentBlogsList />
      </div>
    </div>
  );
}
