export default function Bio() {
  // TODO: Add links here to the different resumes I have for each category

  return (
    <div className="text-left p-8 md:pr-4">
      <p className="text-4xl">
        Hello, I'm
        <div className="btn-link text-info font-bold">
          <a href="https://www.linkedin.com/in/edgar-donoso-mansilla">Edgar Jose Donoso Mansilla</a>
        </div>
      </p>

      <div className="flex flex-row justify-center">
        <ul className="list text-xl italic text-center">
          <li className="list-row text-primary">Physics Simulation Developer</li>
          <li className="list-row text-secondary">Embedded Systems Engineer</li>
          <li className="list-row text-info">Computer Graphics Engineer</li>
        </ul>
      </div>

      <div className="hidden md:inline text-lg">
        I am passionate about the intersection between the real world and digital systems. I am currently specializing in simulation development, computational mathematics and embedded systems. Having lived in 6 countries across America, South America and Asia (Bolivia, Thailand, Argentina, Malaysia, Philippines, USA), I easily connect with people and work enabling a culture of learning to exceed expectations.
      </div>

      <div className="collapse collapse-arrow bg-base-100 md:hidden">
        <input type="checkbox" />

        <div className="collapse-title">
          About Me
        </div>

        <div className="collapse-content">
          I am passionate about the intersection between the real world and digital systems. I am currently specializing in simulation development, computational mathematics and embedded systems. Having lived in 6 countries across America, South America and Asia (Bolivia, Thailand, Argentina, Malaysia, Philippines, USA), I easily connect with people and work enabling a culture of learning to exceed expectations.
        </div>
      </div>
    </div>
  );
}
