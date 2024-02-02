import HomePage from "@/pages/Home";
import Mymodal from "@/pages/modal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/:open",
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          element: <Mymodal />,
          path: "/about",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
