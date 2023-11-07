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
import UpdateBook from "../Pages/UpdateBook";
import Science from "../Components/AllCard/AllBookCard/Science/Science";
import History from "../Components/AllCard/AllBookCard/History/History";
import Novel from "../Components/AllCard/AllBookCard/Novel/Novel";
import Comics from "../Components/AllCard/AllBookCard/Comics/Comics";




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
          path: '/updateBook',
          element:<PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>
         
        },


        {
          path: '/allBooks',
          element:<AllBook></AllBook>,
          loader:() => fetch ('http://localhost:5000/book')
        
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
          path:'/science',
          element:<Science></Science>

        },
        {
          path:'/history',
          element:<History></History>

        },
        {
          path:'/novel',
          element:<Novel></Novel>

        },
        {
          path:'/comics',
          element:<Comics></Comics>


        },

        {
          path:''

        },





      ],
    },

]);
     
export default routes;