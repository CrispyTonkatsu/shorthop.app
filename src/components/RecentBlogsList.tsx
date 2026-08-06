export default function RecentBlogsList() {
  // TODO: Make this fetch and generate the list programatically (where we actually get to use react lol beyond the basics)

  const postList = [
    'post-0',
    'post-1',
    'post-2',
    'post-3',
    'post-4',
    'post-5',
    'post-6',
  ];

  return (
    <>
      <ul className="list bg-base-100 backdrop-blur rounded-box tracking-wide">
        <li className="p-4 pb-2 text-xs opacity-60">
          Recent thoughts
        </li>

        {
          postList.map(post => {
            return (
              <li className="list-row">
                {post}
              </li>
            );
          })
        }
      </ul>
    </>
  );
}
