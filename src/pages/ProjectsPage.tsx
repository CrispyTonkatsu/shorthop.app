import Projects from "../components/Projects";

export default function ProjectsPage() {
  // TODO: Add the tagging system so that they are filterable

  return (
    <>
      <div className="text-center text-4xl text-info font-bold italic py-4">
        Projects
      </div>

      <Projects />
    </>
  );
}
