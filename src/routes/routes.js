import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SinglePage from "../Pages/SinglePage/SinglePage";
const router =createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'City/:cityID',
        element:<SinglePage/>,
    }
])
export default router