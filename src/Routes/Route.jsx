import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import AddBook from "../Pages/AddBook";
import AllBook from "../Pages/AllBook";
import BorrowedBook from "../Pages/BorrowedBook";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";




const routes = createBrowserRouter ([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          index: true,
          element:<Home></Home> ,
        },
        {
          path: '/addBook',
          element:<PrivateRoutes><AddBook></AddBook></PrivateRoutes>
         
        },
        {
          path: '/allBooks',
          element:<AllBook></AllBook>
        
        },
        {
          path: '/borrowedBooks',
          element:<BorrowedBook></BorrowedBook>
       
        },
        {
          path: '/login',
          element:<Login></Login>
      
        },

        {
          path:'/register',
          element:<Register></Register>

        },
        {
          path:''

        },
        {
          path:''

        },
        {
          path:''

        },
        {
          path:''

        },

        {
          path:''

        },





      ],
    },

]);
     
export default routes;