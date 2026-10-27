import BlogCard from "../components/cards/BlogCard";
import { blogData } from "../content/blogs/BlogData";

export default function Blog() {
  // TODO: Add the tagging system so that they are filterable

  return (
    <div className="py-4">
      <div className="divider divider-start">
        <div className="text-center text-4xl text-primary font-bold italic">
          Blogs
        </div>
      </div>

      <div className="mt-8">
        <div className="grid md:grid-cols-3 px-2 md:px-0 md:space-x-4 space-y-4">
          {
            blogData.map(blog => {
              return (
                <BlogCard {...blog} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
