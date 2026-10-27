import Projects from "../components/Projects";

export default function ProjectsPage() {
  // TODO: Add the tagging system so that they are filterable

  return (
    <div className="py-4">
      <div className="divider divider-start">
        <div className="text-center text-4xl text-primary font-bold italic">
          Projects
        </div>
      </div>

      <Projects />
    </div>
  );
}
