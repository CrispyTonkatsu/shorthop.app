export default function Home() {
  return (
    <div className="flex bg-dot-pattern h-screen">
      <div className="w-1/2 p-10 pr-3">
        <div className="text-left">
          <p className="text-4xl">
            Hello, I'm
            <div className="btn-link text-info font-bold">
              <a href="https://www.linkedin.com/in/edgar-donoso-mansilla">Edgar Jose Donoso Mansilla</a>
            </div>
          </p>
          <br />
          <div className="text-lg">
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
          <br />
          <p className="text">
            I am passionate about the intersection between the real world and digital systems. I am currently specializing in simulation development, computational mathematics and embedded systems.
          </p>
          <p className="text">
            Having lived in 6 countries across America, South America and Asia (Bolivia, Thailand, Argentina, Malaysia, Philippines, USA), I easily connect with people and work enabling a culture of learning to exceed expectations.
          </p>
        </div>
      </div>

      {/* TODO: left off here creating the layout for the project and blog cards*/}

      <div className="w-1/2 p-10 pl-3">
        <div className="carousel w-full h-1/3 pb-3 pt-3">
          <div id="item1" className="carousel-item card card-side card-dash w-full bg-base-300 shadow-sm">
            <div className="card-body">
              <div className="card-title">
                Test Card
              </div>

              <p>This is where the project synopsis would go</p>

              <div className="card-actions justify-end">
                <div className="btn btn-ghost btn-secondary">
                  Project Page
                </div>
              </div>
            </div>

            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="test image"
              />
            </figure>
          </div>

          <div id="item2" className="carousel-item card card-side card-dash w-full bg-base-300 shadow-sm">
            <div className="card-body">
              <div className="card-title">
                Test Card 2
              </div>

              <p>This is where the project synopsis would go buty 2</p>

              <div className="card-actions justify-end">
                <div className="btn btn-ghost btn-secondary">
                  Project Page
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
