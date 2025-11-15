import { createBrowserRouter } from "react-router";
import HomeLayoutes from "../layoutes/HomeLayoutes";
import Home from "../pages/Home";
import Toys from "../layoutes/Toys";
import ToysData from "../components/ToysData";
import ToyDetails from "../pages/ToyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouts from "../layoutes/AuthLayouts";

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
    element: <AuthLayouts></AuthLayouts>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      },
    ]
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
path:"/toy-details/:toyId",
element:<ToyDetails></ToyDetails>
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);
export default router;
