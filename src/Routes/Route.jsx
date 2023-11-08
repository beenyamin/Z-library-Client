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
import Details from "../Pages/Details";




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
          path: '/updateBook/:id',
          element:<PrivateRoutes><UpdateBook></UpdateBook></PrivateRoutes>,
          loader:({params}) => fetch (`https://assignment-11-server-rho-ashen.vercel.app/book/${params.id}`)
         
        },
        {
          path: '/book/:id',
          element:<PrivateRoutes><Details></Details></PrivateRoutes>,
          loader:({params}) => fetch (`https://assignment-11-server-rho-ashen.vercel.app/book/${params.id}`)
         
        },


        {
          path: '/allBooks',
          element:<AllBook></AllBook>,
          loader:() => fetch ('https://assignment-11-server-rho-ashen.vercel.app/book')
        
        },
        {
          path: '/borrowedBooks',
          element:<PrivateRoutes><BorrowedBook></BorrowedBook></PrivateRoutes> ,
          loader: () => fetch ('https://assignment-11-server-rho-ashen.vercel.app/borrowItem')

       
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
          element:<Science></Science>,
          loader:() => fetch ('https://assignment-11-server-rho-ashen.vercel.app/book')


        },
        {
          path:'/history',
          element:<History></History>,
          loader:() => fetch ('https://assignment-11-server-rho-ashen.vercel.app/book')

        },
        {
          path:'/novel',
          element:<Novel></Novel>,
          loader:() => fetch ('https://assignment-11-server-rho-ashen.vercel.app/book')

        },
        {
          path:'/comics',
          element:<Comics></Comics>,
          loader:() => fetch ('https://assignment-11-server-rho-ashen.vercel.app/book')


        },

        {
          path:''

        },





      ],
    },

]);
     
export default routes;