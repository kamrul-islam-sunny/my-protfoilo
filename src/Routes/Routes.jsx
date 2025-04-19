import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import Project from "../components/Project";
import About from "../components/About";
import Skill from "../components/Skill";
import ProjectDetails from "../page/ProjectDetails";
import AboutMe from "../page/AboutMe";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/project",
        element: <div className="py-10">
          <Project/>
        </div>,
      },
      {
        path: "/about",
        element: <div className="py-10">
          <AboutMe/>
        </div>,
      },
      {
        path: "/skill",
        element: <div className="py-10">
          <Skill/>
        </div>,
      },
      {
        path: "/:slug",
        element: <ProjectDetails/>,
      }

    ]
  },
]);

export default router;