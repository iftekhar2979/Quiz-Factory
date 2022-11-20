import { createBrowserRouter } from "react-router-dom";
import Error from "../Component/Error.js/Error";
import Root from "../Component/Root/Root";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>
        
    }
])