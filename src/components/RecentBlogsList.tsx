import { Link } from "react-router-dom";

interface BlogListingProps {
  name: string
  tags?: string[]
  blogLink?: string
};

function BlogListing({ name, tags, blogLink }: BlogListingProps) {
  return (
    <li className="list-row">
      <div className="flex-col list-col-grow">
        <div>
          {name}
        </div>

        <div>
          {
            tags ?
              tags.map(tag => {
                return <> {tag} </>
              })
              : null
          }
        </div>
      </div>

      <Link className="left btn btn-link btn-info" to={blogLink}>
        Read More
      </Link>
    </li >
  );
}

export default function RecentBlogsList() {
  // TODO: Make this fetch and generate the list programatically (where we actually get to use react lol beyond the basics)

  // NOTE: only using the last 3 posts because that fits nicely
  const postList = [
    'post-0',
    'post-1',
    'post-2',
  ];

  return (
    <>
      <ul className="list bg-base-300 backdrop-blur tracking-wide">
        <li className="p-4 pb-2 text-s opacity-80 text-primary">
          Recent posts
        </li>

        {
          postList.map(post => {
            return (
              <BlogListing
                name={post}
                tags={["test", "tags", "go here"]}
              />
            );
          })
        }
      </ul>
    </>
  );
}
