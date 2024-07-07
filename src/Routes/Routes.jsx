import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Pages/MainRoute";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainRoute/>,
    children:[
        {
            path:'/',
            element:<Home/>

        }
    ]
  },
]);

export default router
