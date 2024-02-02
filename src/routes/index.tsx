import HomePage from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <HomePage/>
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
