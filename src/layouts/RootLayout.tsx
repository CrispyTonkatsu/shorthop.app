import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="@container flex flex-col bg-dot-pattern bg-fixed">
      <ScrollRestoration />
      <Navbar />

      <div className="flex flex-col justify-center w-full">
        <div className="max-w-250 mx-auto">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}
