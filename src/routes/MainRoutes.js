import { Outlet } from 'react-router-dom'
// Three Common Pieces
import Header from "../components/header";
import Home from "../components/home";
import About from "../components/about";
import Skills from "../components/skills";

const MainRoutes = {
    path: '',
    element: (
        <>
            <Header/>
            <Outlet />
        </>
    ),
    
    children: [
        // {
        //     path: '/',
        //     element: <Home />
        // },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/skills',
            element: <Skills/>
        }
    ]
}
export default MainRoutes;