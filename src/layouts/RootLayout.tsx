import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="flex flex-col bg-dot-pattern h-dvh overflow-hidden">

      <header>
        <Navbar />
      </header>
      <main className="flex-1 overflow-y-auto relative">
        <Outlet />
      </main>
    </div>
  );
}
