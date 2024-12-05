import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components";

export const AllRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <>error</>,
      children: [
        {
          index: true,
          element: <>home</>,
        },
        {
          path: "about",
          element: <>about</>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
