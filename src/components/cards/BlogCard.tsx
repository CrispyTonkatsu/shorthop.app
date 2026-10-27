import { format } from "date-fns"
import { Link } from "react-router-dom"

export interface BlogCardProps {
  title: string
  date?: Date
  brief: string
  file: string
  img?: string
}

export default function BlogCard({ title, date = null, brief, file, img = null }: BlogCardProps) {
  const dateFormat = "Y-MMM";
  const dateString = date ? format(date, dateFormat) : null;

  return (
    <div className={`card ${img ? "image-full" : ""} w-70 h-60 bg-base-100`}>
      <figure>
        {img ?
          <img src={img} />
          : null
        }
      </figure>

      <div className="card-body">
        <h2 className="card-title justify-between">
          <div className="text-info">
            {title}
          </div>

          <div className="text-sm">
            {dateString}
          </div>
        </h2>

        <p>{brief}</p>

        <div className="card-actions justify-end">
          <Link
            to={`/markdown/blogs/${file}`}
            className="btn btn-accent btn-outline"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}
