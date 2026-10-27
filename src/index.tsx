import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MarkdownReader from "./pages/MarkdownReader";
import SpecializedLanding from "./components/SpecializedLanding";
import ProjectsPage from "./pages/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='landing/sim' replace />
      },
      {
        path: 'landing/:type',
        element: <SpecializedLanding />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'markdown/:type/:file',
        element: <MarkdownReader />
      }
    ],
  },
])
