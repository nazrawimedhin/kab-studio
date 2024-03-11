import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/projects";
import Meets from "./pages/meets";
import Project from "./pages/project";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Projects />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/meets",
      element: <Meets />,
    },
    {
      path: "projects/1",
      element: <Project />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
