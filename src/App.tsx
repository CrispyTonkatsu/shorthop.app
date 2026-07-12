import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Projects from "./pages/Projects.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7135053/pexels-photo-7135053.jpeg")`,
        }}
      >
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
