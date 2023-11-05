import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import AddBook from "../Pages/AddBook";
import AllBook from "../Pages/AllBook";
import BorrowedBook from "../Pages/BorrowedBook";


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
          element:<AddBook></AddBook>

         
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
          path: '',
       
        },
      ],
    },

]);
     
export default routes;