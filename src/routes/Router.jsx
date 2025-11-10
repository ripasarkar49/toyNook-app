import { createBrowserRouter } from "react-router";
import HomeLayoutes from "../layoutes/HomeLayoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutes></HomeLayoutes>,
  },
  {
    path: "/auth",
    element: <h2>Authentication layoutes</h2>,
  },
  {
    path: "/toys",
    element: <h2>Toyes layoutes</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);
export default router;
