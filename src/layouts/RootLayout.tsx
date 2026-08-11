import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="@container flex bg-dot-pattern h-dvh overflow-hidden">
      <main className="flex-1 overflow-y-auto relative">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
