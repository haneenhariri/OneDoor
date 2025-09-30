import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/Service/Service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children : [
        {
            path : '',
            element : <Home/>
        },
        {
            path : '/about',
            element : <About/>
        },
        {
            path : '/contact',
            element : <Contact/>
        },
        {
            path : '/services',
            element : <Service/>
        },
    ]
  },
]);