import { Link } from "react-router-dom";

export interface PageButtonProps {
  text: string
  link: string
  svgPath: string
};

export default function PageButton({ text, link, svgPath }: PageButtonProps) {
  return (
    <Link to={link}>
      {text}
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={svgPath}
        />
      </svg>
    </Link>
  );

}

