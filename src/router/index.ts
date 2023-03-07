import { lazy } from "react";
import { ROUTER, RouterProps } from "./config";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

export const PUBLIC_ROUTERS: RouterProps[] = [
  {
    path: ROUTER.HOME_PAGE,
    element: Home,
  },
  {
    path: ROUTER.ABOUT_PAGE,
    element: About,
  },
];
