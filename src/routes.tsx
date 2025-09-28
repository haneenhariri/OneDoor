import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children : [
        {
            path : '',
            element : <Home/>
        }
    ]
  },
]);