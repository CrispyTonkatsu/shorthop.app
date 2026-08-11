export default function Bio() {
  // TODO: Add links here to the different resumes I have for each category

  return (
    <div className="text-left p-8 md:pr-4">
      <p className="text-4xl">
        Hihii, I'm
        <div className="btn-link text-info font-bold">
          <a href="https://www.linkedin.com/in/edgar-donoso-mansilla">Edgar Jose Donoso Mansilla</a>
        </div>
      </p>
      <br />

      <div className="text-xl font-light wrap-normal">
        <text className="text-primary">Physics Simulation Developer </text>
        <text className="text-secondary">Embedded Systems Engineer </text>
        <text className="text-info">Computer Graphics Engineer </text>
        <text className="text-accent">Gameplay Systems Engineer </text>
      </div>
      <br />

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
