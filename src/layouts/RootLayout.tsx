import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="@container flex flex-col bg-dot-pattern bg-fixed min-h-screen">
      <ScrollRestoration />
      <Navbar />

      <div className="flex flex-col grow justify-center w-full">
        <div className="max-w-full sm:max-w-250 mx-auto">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}
