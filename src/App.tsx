import { RouterProvider } from "react-router-dom";
import { router } from "./index.tsx";

export default function App() {
  return <RouterProvider router={router} />
}
