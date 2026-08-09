import Bio from "../components/Bio";
import RecentBlogsList from "../components/RecentBlogsList";

export default function Home() {
  // TODO: Consider trying to get a video/running version of the project in this start area

  return (
    <div className="flex flex-col md:flex-row md:h-3/4">
      <div className="flex-1 p-4 pb-0">
        <Bio />
      </div>

      <div className="flex-1 p-4">

        {
          // TODO: Replace this with the WGPU app you're making eventually
        }
        <div className="flex flex-row justify-center">
          <img
            className="w-1/2"
            src="https://images.unsplash.com/photo-1575639807401-0c333374e3ed?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTc4NjMwMzExN3w&ixlib=rb-4.1.0&q=85&w=1920"
          />
        </div>

        <RecentBlogsList />
      </div>
    </div>
  );
}
