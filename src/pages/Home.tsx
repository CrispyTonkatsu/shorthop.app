export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2 p-10">
        <div className="card bg-base-300">
          <div className="card-body text-left">
            <p className="text-6xl">
              Hello, I'm
              <div className="text-info font-bold aura-xs">Edgar Jose Donoso Mansilla</div>
            </p>
            <p className="text-lg">Software Engineer | Gameplay Engineer</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 text-6xl">
        <div className="text-primary">Right side</div>
      </div>
    </div>
  );
}
