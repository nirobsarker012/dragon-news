import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../components/About";
import Career from "../components/Career";

import HeroContent from "../components/HeroContent";
import AuthLayout from "../components/AuthLayout";
import NewsDetails from "../components/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
      {
        path: "/news-details/:id",
        Component: NewsDetails,
        loader: () => fetch(`../news.json`),
      },
      {
        path: "/categories/:id",
        Component: HeroContent,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
            Component: Login,
          },
          {
            path: "/auth/register",
            Component: Register,
          },
        ],
      },
    ],
  },
]);
