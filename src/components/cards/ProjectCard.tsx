import type { ReactElement } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string,
  body: ReactElement
  image: string
  imageAlt?: string
  projectPage?: string
};

export default function ProjectCard({ title, body, image, imageAlt = '', projectPage = '' }: ProjectCardProps) {
  return (
    <div
      className="carousel-item card card-side card-dash w-1 h-1 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="card-title">
          {title}
        </div>

        {body}

        <div className="card-actions justify-end">
          <Link className="btn btn-ghost btn-secondary" to={projectPage}>
            Read More
          </Link>
        </div>
      </div>


      <figure>
        <img
          src={image}
          alt={imageAlt}
        />
      </figure>
    </div>
  );
}
