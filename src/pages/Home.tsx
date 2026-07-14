export default function Home() {
  return (
    <div className="flex bg-dot-pattern h-screen">
      <div className="w-1/2 p-10 pr-3">
        <div className="text-left">
          <p className="text-4xl">
            Hello, I'm
            <div className="btn-link text-info font-bold"><a href="https://www.linkedin.com/in/edgar-donoso-mansilla">Edgar Jose Donoso Mansilla</a></div>
            <br />
          </p> <div className="text-lg">
            <p>Software Engineer:</p>
            <ul className="list-disc pl-5">
              {/*
                    TODO: Add links here to the different resumes I have for each category
              */}
              <li className="text-primary">Physics Simulations</li>
              <li className="text-secondary">Embedded Systems</li>
              <li className="text-info">Graphics Engines</li>
              <li className="text-accent">High Performance Computing</li>
            </ul>
          </div>
          <p className="text-lg">
            I am passionate about the intersection between the real world and digital systems. I am currently specializing in simulation development, computational mathematics and embedded systems.
          </p>
          <p className="text-lg">
            Having lived in 6 countries across America, South America and Asia (Bolivia, Thailand, Argentina, Malaysia, Philippines, USA), I easily connect with people and work enabling a culture of learning to exceed expectations.
          </p>
        </div>
      </div>

      {/* TODO: left off here creating the layout for the project and blog cards*/}

      <div className="w-1/2 p-10 pl-3">
        <label>Projects:</label>
        <div className="carousel pb-3 pt-3">
          <div id="item1" className="carousel-item card w-full bg-base-300">
            <div className="card-body">
              <div className="card-title">
                Test Card
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full" />
          </div>
        </div>

        <label>Blog:</label>
        <div className="carousel pt-3">
          <div id="item1" className="carousel-item card w-full bg-base-300">
            <div className="card-body">
              <div className="card-title">
                Test Card
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full" />
          </div>
        </div>
      </div>
    </div >
  );
}
