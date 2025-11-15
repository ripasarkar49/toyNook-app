import { createBrowserRouter } from "react-router";
import HomeLayoutes from "../layoutes/HomeLayoutes";
import Home from "../pages/Home";
import Toys from "../layoutes/Toys";
import ToysData from "../components/ToysData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutes></HomeLayoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication layoutes</h2>,
  },
  {
    path: "/toys",
    element: <Toys></Toys>,
    children: [
      {
        path: "/toys",
        element:<ToysData></ToysData>
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);
export default router;
