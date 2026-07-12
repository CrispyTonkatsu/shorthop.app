import { Link } from "react-router-dom";

export default function MainButton() {
  const MainButtonData = {
    label: "shorthop.dev",
    link: "/",
  };

  return (
    <Link className="btn btn-neutral" to={MainButtonData.link}>
      {MainButtonData.label}
    </Link>
  );
}
