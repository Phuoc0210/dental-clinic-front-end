import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomepageIndex from "./pages/homepage/homepageIndex";
import FormContainer from "./pages/user/login";
import Login from "./pages/user/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>,
  },
  {
    path: "/login",
    element: <FormContainer />,
  },
  {
    path: "/homepage",
    element: <HomepageIndex />,
  },
]);

export default function AppRoute() {
  return <RouterProvider router={router} />;
}
