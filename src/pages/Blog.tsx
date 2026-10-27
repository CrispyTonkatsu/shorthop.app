import BlogCard from "../components/cards/BlogCard";
import { blogData } from "../content/blogs/BlogData";

export default function Blog() {
  // TODO: Add the tagging system so that they are filterable

  return (
    <div className="flex flex-col place-items-center">
      <div className="text-4xl text-info font-bold italic py-4">
        Blogs:
      </div>

      <div className="grid grid-flow-row md:grid-flow-col px-2 md:px-0 md:space-x-4 space-y-4">
        {
          blogData.map(blog => {
            return (
              <BlogCard {...blog} />
            );
          })
        }
      </div>
    </div>
  );
}
