import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/authenticate/oauth",
    element: <Login />,
  },
]);

export default router;