import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Details from "../Component/Details";
import Contact from "../Component/Contact";
import About from "../Component/About";
import Update from "../Component/Update";
import Privet from "../Component/Privet";
import Review from "../Component/Review";

 const router=createBrowserRouter([{
    path:"/",
    element:<Root></Root>,
    children:[
        {
            path:'/',
            loader:()=> fetch("/Tour.json"),
            element:<Home></Home>
        },
        {
          path:'/details/:id',
          loader:()=> fetch("../Tour.json"),
          element:<Privet><Details></Details></Privet>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/update',
            element:<Update></Update>
        },{
            path:"/review",
            element:<Review></Review>
        }
    ]


 }])
 export default router;