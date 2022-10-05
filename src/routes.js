import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import NotFound from "./components/NotFound/NotFound";
import Offers from "./components/Offers/Offers";
import Rewards from "./components/Rewards/Rewards";

export const router = createBrowserRouter([
    {path:'/', 
    element:<Main></Main>, 
    children:[
        {path: '/', element:<Home></Home> },
        {path: '/home', element:<Home></Home> },
        {path: '/menu', element:<Menu></Menu> },
        {path: '/offers', element:<Offers></Offers> },
        {path: '/rewards', element:<Rewards></Rewards> },  
    ]
    },
    {path: '*', element:<NotFound></NotFound> },
    
])