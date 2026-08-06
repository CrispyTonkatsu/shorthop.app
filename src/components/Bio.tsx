export default function Bio() {
  // TODO: Add links here to the different resumes I have for each category
  //
  return (
    <div className="text-left">
      <p className="text-4xl">
        Hello, I'm
        <div className="btn-link text-info font-bold">
          <a href="https://www.linkedin.com/in/edgar-donoso-mansilla">Edgar Jose Donoso Mansilla</a>
        </div>
      </p>
      <br />
      <div className="text-xl">
        <p>Software Engineer:</p>
        <ul className="list-disc pl-4">
          <li className="text-primary">Physics Simulations</li>
          <li className="text-secondary">Embedded Systems</li>
          <li className="text-info">Graphics Engines</li>
          <li className="text-accent">High Performance Computing</li>
        </ul>
      </div>
      <br />
      <p className="text">
        I am passionate about the intersection between the real world and digital systems. I am currently specializing in simulation development, computational mathematics and embedded systems.
      </p>
      <p className="text">
        Having lived in 6 countries across America, South America and Asia (Bolivia, Thailand, Argentina, Malaysia, Philippines, USA), I easily connect with people and work enabling a culture of learning to exceed expectations.
      </p>
    </div>
  );
}
