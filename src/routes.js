import { createBrowserRouter } from "react-router-dom";
import Catagories from "./components/Catagories/Catagories";
import CatagoryFoods from "./components/CatagoryFoods/CatagoryFoods";
import Countries from "./components/Countries/Countries";
import CountryFoods from "./components/CountryFoods/CountryFoods";
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

        {path: '/menu/countryfood', 
        loader: async()=> fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list'),
        element: <Countries></Countries>},

        {path: '/menu/countryfood/:countryName', 
        loader: async({params})=>{
            console.log(params.countryName);
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.countryName}`)
        },
        element:<CountryFoods></CountryFoods>},

        {path: '/menu/catagoryfood',
         loader: async()=> fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
         element: <Catagories></Catagories>}, 

        {path: '/menu/catagoryfood/:catagoryName', 
        loader: async({params})=> {
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catagoryName}`)
        },
        
        element: <CatagoryFoods></CatagoryFoods> },

        {path: '/offers', element:<Offers></Offers> },
        {path: '/rewards', element:<Rewards></Rewards> },  
    ]
    },
    {path: '*', element:<NotFound></NotFound> },
    
])