/* eslint-disable react-refresh/only-export-components */
import {
    createBrowserRouter,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/home"
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import About from "./pages/about";
const LayOut = lazy(()=> import("./layout/stableLayout"))
import ProjectDetail from "./pages/projectDetail";
import Loader from "./components/loader"



const router = createBrowserRouter([
    {
       path:"/",
       element: <Suspense fallback={<Loader />}>
        <LayOut/>
       </Suspense>,
       children:[
        {
            index: true,
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "gallery",
            element: <Gallery />
        },
        {
            path: "/projectDetail/:id",
            element: <ProjectDetail />
        },
        {
            path:"contact",
            element:<Contact/>
        }
       ]
    },
]);

export default router;